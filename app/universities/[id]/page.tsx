import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { universities, getUniversity } from "@/content/universities";
import { site } from "@/config/site";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Globe2,
  CalendarDays,
  GraduationCap,
} from "@/components/ui/icons";
export function generateStaticParams() {
  return universities.map((u) => ({ id: u.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const u = getUniversity(id);
  return {
    title: u ? `${u.name}: поступление и стоимость` : "Университет не найден",
    description: u?.analysis,
    alternates: { canonical: `/universities/${id}` },
  };
}
export default async function UniversityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const u = getUniversity(id);
  if (!u) notFound();
  const passed = u.deadlineEnd ? u.deadlineEnd < "2026-09-30" : null;
  return (
    <main id="main" className="shell page-content">
      <Link href="/universities" className="text-link breadcrumb">
        ← Все университеты
      </Link>
      <div className="detail-header">
        <div>
          <span className="eyebrow">
            {u.type.toUpperCase()} · {u.city.toUpperCase()}
          </span>
          <h1>{u.name}</h1>
          <p>{u.fullName}</p>
          <div className="tags">
            {u.fields.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </div>
        <div
          className={`detail-monogram accent-${u.accent}`}
          aria-hidden="true"
        >
          {u.name.slice(0, 2)}
          <span>↗</span>
        </div>
      </div>
      <div className="detail-grid">
        <div className="detail-main">
          <section className="info-panel">
            <span className="eyebrow">ПОЧЕМУ В ПОДБОРКЕ</span>
            <h2>{u.tagline}</h2>
            <p>{u.analysis}</p>
          </section>
          <section className="info-panel">
            <h2>Как поступить</h2>
            <p>{u.admission}</p>
            <a
              className="text-link"
              href={u.admissionUrl}
              target="_blank"
              rel="noreferrer"
            >
              Официальные условия <ArrowUpRight size={18} />
            </a>
          </section>
          <section className="info-panel">
            <h2>Что учесть</h2>
            <p>{u.caution}</p>
            <Link href="/guide" className="text-link">
              Документы и все шаги <ArrowRight size={18} />
            </Link>
          </section>
        </div>
        <aside className="detail-summary">
          <span className="eyebrow">ТВОЯ ТОЧКА ОТСЧЁТА</span>
          <div className="detail-fee">{u.fee}</div>
          <p className="muted tiny">{u.feeNote}</p>
          <a
            className="text-link"
            href={u.feeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Источник стоимости <ArrowUpRight size={17} />
          </a>
          <dl className="detail-facts">
            <dt>
              <MapPin size={16} />
              Город
            </dt>
            <dd>{u.city}</dd>
            <dt>
              <Globe2 size={16} />
              Язык
            </dt>
            <dd>{u.languages}</dd>
            <dt>
              <GraduationCap size={16} />
              Уровень
            </dt>
            <dd>Бакалавриат</dd>
            <dt>
              <CalendarDays size={16} />
              Последний проверенный набор
            </dt>
            <dd>
              {u.deadline}
              <span
                className={`deadline-status ${passed === false ? "open" : ""}`}
              >
                {passed === true
                  ? "Период завершён"
                  : passed === false
                    ? "В пределах опубликованного периода на 30.09.2026"
                    : "Статус требует проверки"}
              </span>
            </dd>
          </dl>
          <p className="tiny muted">
            Сроки 2027 в прочитанных источниках не подтверждены. Проверено{" "}
            {site.checkedAt}.
          </p>
          <a
            href={site.telegram}
            target="_blank"
            rel="noreferrer"
            className="button primary"
          >
            Обсудить программу <ArrowUpRight size={18} />
          </a>
        </aside>
      </div>
    </main>
  );
}
