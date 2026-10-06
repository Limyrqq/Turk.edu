import { z } from "zod/mini";
export const leadSchema = z.object({
  name: z
    .string()
    .check(
      z.trim(),
      z.minLength(2, "Введите имя, минимум 2 символа"),
      z.maxLength(80, "Имя слишком длинное"),
      z.regex(
        /^[\p{L}\p{M}\s.'-]+$/u,
        "В имени допустимы буквы, пробелы и дефис",
      ),
    ),
  phone: z.string().check(
    z.trim(),
    z.regex(/^\+?[\d\s()-]{10,24}$/, "Введите телефон в международном формате"),
    z.refine((value) => {
      const length = value.replace(/\D/g, "").length;
      return length >= 10 && length <= 15;
    }, "Телефон должен содержать от 10 до 15 цифр"),
  ),
  interest: z.enum([
    "Выбираю направление",
    "IT и инженерия",
    "Бизнес",
    "Медицина",
    "Дизайн",
    "Другой вопрос",
  ]),
  consent: z.literal(true, { error: "Нужно согласие на обработку обращения" }),
  website: z._default(
    z.string().check(z.maxLength(0, "Некорректное обращение")),
    "",
  ),
});
export type LeadInput = z.infer<typeof leadSchema>;
export function flattenLeadErrors(error: Parameters<typeof z.flattenError>[0]) {
  return z.flattenError(error).fieldErrors;
}
