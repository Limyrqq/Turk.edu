"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "@/components/ui/icons";
import { site } from "@/config/site";
export function LeadForm() {
  const [errors, setErrors] = useState<Record<string, string[] | undefined>>(
    {},
  );
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const { leadSchema, flattenLeadErrors } = await import("@/lib/lead-schema");
    const result = leadSchema.safeParse({
      name: data.get("name"),
      phone: data.get("phone"),
      interest: data.get("interest"),
      consent: data.get("consent") === "on",
      website: data.get("website") || "",
    });
    if (!result.success) {
      setErrors(flattenLeadErrors(result.error));
      return;
    }
    setErrors({});
    setState("loading");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const body = await response.json();
      setMessage(body.message || "Не удалось отправить обращение.");
      setState(response.ok ? "success" : "error");
      if (body.errors) setErrors(body.errors);
    } catch {
      setMessage("Нет соединения. Попробуйте ещё раз или напишите напрямую.");
      setState("error");
    }
  }
  if (state === "success")
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={38} />
        <h3>Обращение принято</h3>
        <p>{message}</p>
        <a
          href={site.telegram}
          className="button primary"
          target="_blank"
          rel="noreferrer"
        >
          Открыть Telegram <ArrowUpRight size={18} />
        </a>
        <button className="text-link" onClick={() => setState("idle")}>
          Новое обращение
        </button>
      </div>
    );
  return (
    <form className="lead-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <label>
          Как тебя зовут
          <input
            name="name"
            autoComplete="given-name"
            placeholder="Твоё имя"
            maxLength={80}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
            required
          />
          <span id="name-error" className="field-error">
            {errors.name?.[0]}
          </span>
        </label>
        <label>
          Телефон
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+7 771 000 00 00"
            maxLength={24}
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
            required
          />
          <span id="phone-error" className="field-error">
            {errors.phone?.[0]}
          </span>
        </label>
      </div>
      <label>
        Что тебе интересно
        <select name="interest">
          {[
            "Выбираю направление",
            "IT и инженерия",
            "Бизнес",
            "Медицина",
            "Дизайн",
            "Другой вопрос",
          ].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </label>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent">
        <input
          type="checkbox"
          name="consent"
          required
          aria-describedby="consent-error"
        />
        <span>
          Согласен на обработку имени и телефона для ответа на обращение.{" "}
          <Link href="/privacy">Подробнее</Link>
        </span>
      </label>
      <span id="consent-error" className="field-error">
        {errors.consent?.[0]}
      </span>
      <button
        className="button primary"
        type="submit"
        disabled={state === "loading"}
      >
        {state === "loading" ? "Отправляем…" : "Обсудить мой маршрут"}
        <ArrowUpRight size={20} />
      </button>
      <p className="form-message" role="status">
        {state === "error" ? message : ""}
      </p>
    </form>
  );
}
