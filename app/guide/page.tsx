import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/content/guide";
import { universities } from "@/content/universities";
import { ui } from "@/content/ui";
import { Checklist } from "@/components/sections/checklist";
import { Faq } from "@/components/sections/faq";
import { ArrowUpRight } from "@/components/ui/icons";
export const metadata: Metadata = {
  title: "Поступление: шаги, документы и даты",
  description:
    "Пошаговый маршрут из Казахстана в Турцию: экзамены, ЕНТ, переводы, denklik, заявки, календарь и регистрация.",
  alternates: { canonical: "/guide" },
};
export default function GuidePage() {
  return (
    <main id="main" className="shell page-content">
      <div className="page-heading">
        <span className="eyebrow">ИЗ ПЛАНА — В РЕАЛЬНОСТЬ</span>
        <h1>{ui.guideTitle}</h1>
        <p>Шесть шагов, которые делают большую цель понятной.</p>
        <span className="verified">{ui.verified}</span>
      </div>
      <div className="guide-grid">
        <div>
          {steps.map((s, i) => (
            <section key={s.title} id={`step-${i + 1}`} className="guide-step">
              <span className="step-number">0{i + 1}</span>
              <div>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
                <a
                  href={s.source}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Официальный источник <ArrowUpRight size={16} />
                </a>
              </div>
            </section>
          ))}
        </div>
        <Checklist />
      </div>
      <section id="calendar" className="subsection">
        <span className="eyebrow">КАЛЕНДАРЬ / БАКАЛАВРИАТ</span>
        <h2>Не пропусти свой срок.</h2>
        <div className="notice-bar">
          {ui.notice} Все опубликованные часы — время Турции (UTC+3). Проверено
          30.09.2026.
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Университет</th>
                <th>Последний проверенный период</th>
                <th>Статус на 30.09.2026</th>
                <th>Источник</th>
              </tr>
            </thead>
            <tbody>
              {universities.map((u) => (
                <tr key={u.id}>
                  <td>
                    <Link href={`/universities/${u.id}`}>{u.name}</Link>
                  </td>
                  <td>{u.deadline}</td>
                  <td>
                    {u.deadlineEnd
                      ? u.deadlineEnd < "2026-09-30"
                        ? "Завершён"
                        : "Опубликованный период ещё идёт"
                      : "Требует проверки"}
                  </td>
                  <td>
                    <a
                      href={u.admissionUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Объявление ${u.name}`}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted tiny">
          Это зафиксированный обзор объявлений, не мониторинг в реальном
          времени. Дополнительные наборы проверяйте непосредственно у вуза.
        </p>
      </section>
      <section className="scholarship-panel subsection">
        <div>
          <span className="eyebrow">ДРУГОЙ ПУТЬ К ЦЕЛИ</span>
          <h2>Türkiye Scholarships</h2>
          <p>
            Конкурсная стипендия: обучение, размещение, страховка и другие виды
            поддержки по условиям программы.
          </p>
          <p>
            Набор 2026: 10 января — 20 февраля, завершён. Общий календарь
            повторяет эти даты; отдельное объявление 2027 ещё нужно проверить.
          </p>
        </div>
        <a
          className="button primary"
          href="https://www.turkiyeburslari.gov.tr/calendar"
          target="_blank"
          rel="noreferrer"
        >
          Официальный календарь <ArrowUpRight size={18} />
        </a>
      </section>
      <section className="subsection">
        <h2>Вопросы перед стартом</h2>
        <Faq />
      </section>
    </main>
  );
}
