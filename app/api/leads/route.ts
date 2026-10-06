import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { leadSchema, flattenLeadErrors } from "@/lib/lead-schema";
import { createLead } from "@/server/services/leads";
import { allowRequest } from "@/server/rate-limit";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  const expectedOrigin = `${requestUrl.protocol}//${request.headers.get("host") || requestUrl.host}`;
  if (origin && origin !== expectedOrigin)
    return NextResponse.json(
      { message: "Недопустимый источник запроса." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json({ message: "Ожидается JSON." }, { status: 415 });
  try {
    if (
      process.env.NODE_ENV === "production" &&
      (!process.env.TELEGRAM_BOT_TOKEN ||
        !process.env.TELEGRAM_CHAT_ID ||
        process.env.NOTIFICATION_ADAPTER === "disabled")
    )
      return NextResponse.json(
        {
          message:
            "Форма пока не подключена. Напишите напрямую в Telegram или WhatsApp.",
        },
        { status: 503 },
      );
    const raw = await request.text();
    if (Buffer.byteLength(raw) > 8192)
      return NextResponse.json(
        { message: "Обращение слишком большое." },
        { status: 413 },
      );
    let value: unknown;
    try {
      value = JSON.parse(raw);
    } catch {
      return NextResponse.json(
        { message: "Некорректный JSON." },
        { status: 400 },
      );
    }
    const parsed = leadSchema.safeParse(value);
    if (!parsed.success)
      return NextResponse.json(
        {
          message: "Проверьте поля формы.",
          errors: flattenLeadErrors(parsed.error),
        },
        { status: 400 },
      );
    const ip = process.env.VERCEL
      ? request.headers.get("x-vercel-forwarded-for")?.split(",")[0].trim() ||
        "unknown"
      : "local";
    const key = createHash("sha256").update(ip).digest("hex");
    if (!(await allowRequest(key)))
      return NextResponse.json(
        { message: "Слишком много запросов. Попробуйте через 10 минут." },
        { status: 429, headers: { "Retry-After": "600" } },
      );
    const result = await createLead(parsed.data);
    return NextResponse.json(
      {
        ...result,
        message: result.delivered
          ? "Обращение отправлено. С вами свяжутся по указанному номеру."
          : "Обращение сохранено в режиме локальной разработки. Telegram не подключён.",
      },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      {
        message:
          "Не удалось отправить обращение. Напишите в Telegram или WhatsApp.",
      },
      { status: 503 },
    );
  }
}
