import type { Metadata } from "next";
import { residence, residenceDocuments } from "@/content/guide";
import { ui } from "@/content/ui";
import { ArrowUpRight, ShieldCheck, Check } from "@/components/ui/icons";
export const metadata: Metadata = {
  title: "Въезд и студенческий ВНЖ для Казахстана",
  description:
    "Безвизовый въезд, студенческая виза, документы e-İkamet, страхование и ВНЖ для граждан Казахстана.",
  alternates: { canonical: "/residence" },
};
export default function ResidencePage() {
  return (
    <main id="main" className="shell page-content">
      <div className="page-heading">
        <span className="eyebrow">КАЗАХСТАН → ТУРЦИЯ</span>
        <h1>{ui.residencePageTitle}</h1>
        <p>Сначала зачисление. Затем — оформление законного пребывания.</p>
        <span className="verified">{ui.verified}</span>
      </div>
      <div className="residence-stat">
        <ShieldCheck size={32} />
        <div>
          <strong>90 / 180 дней</strong>
          <p>
            Краткий безвизовый въезд для граждан Казахстана. Для учёбы и
            регистрации проверь студенческую визу.
          </p>
        </div>
      </div>
      <div className="guide-grid">
        <div>
          {residence.map((r, i) => (
            <section key={r.title} className="guide-step">
              <span className="step-number">0{i + 1}</span>
              <div>
                <h2>{r.title}</h2>
                <p>{r.body}</p>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  {r.label}
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </section>
          ))}
        </div>
        <aside className="info-panel residence-docs">
          <span className="eyebrow">ПАКЕТ ДЛЯ ВНЖ</span>
          <h2>Собери перед подачей</h2>
          <p className="tiny muted">
            Базовый ориентир. Персональный список определяет e-İkamet и
            миграционная служба.
          </p>
          <ul>
            {residenceDocuments.map((x) => (
              <li key={x}>
                <Check size={17} />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://www.goc.gov.tr/kurumlar/goc.gov.tr/Yayinlar/Brosurler/Yabanci-Ogrenci-/Ogrenci-Ikamet-Izni-Basvuru-Sureci.pdf"
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            Официальная памятка <ArrowUpRight size={18} />
          </a>
        </aside>
      </div>
    </main>
  );
}
