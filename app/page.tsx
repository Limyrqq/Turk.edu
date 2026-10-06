import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { ui } from "@/content/ui";
import { steps } from "@/content/guide";
import { Catalog } from "@/components/sections/catalog";
import { Budget } from "@/components/sections/budget";
import { LeadForm } from "@/components/sections/lead-form";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ShieldCheck,
  CalendarDays,
  Send,
  MessageCircle,
} from "@/components/ui/icons";
export default function Home() {
  return (
    <main id="main">
      <section className="hero shell">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="status-dot" />
            {ui.eyebrow}
            <span className="edition">GUIDE / 2026–27</span>
          </div>
          <h1>
            {ui.heroTitle[0]}
            <br />
            <span>{ui.heroTitle[1]}</span>
          </h1>
          <p className="hero-subline">{ui.heroSubline}</p>
          <Link className="button primary hero-cta" href="/universities">
            {ui.primaryCta}
            <ArrowUpRight size={23} />
          </Link>
          <div className="hero-note">
            <Check size={15} />
            {ui.heroNote}
          </div>
          <div className="hero-stats">
            {ui.stats.map((s) => (
              <div key={s.value}>
                <strong>
                  {s.value}
                  <span>{s.value === "10" ? "+" : ""}</span>
                </strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/istanbul.webp"
            alt="Авторская иллюстрация Стамбула: Босфор, мост и силуэт мечети на закате"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <div className="visual-grid" />
          <div className="visual-top">
            <span>
              <span className="status-dot" />
              {ui.heroBadge}
            </span>
            <ArrowUpRight size={25} />
          </div>
          <div className="visual-coordinate">41°00′ N &nbsp; 28°58′ E</div>
          <div className="hero-sticker">
            <span>БОЛЬШОЙ МИР</span>
            <strong>
              начинается
              <br />с тебя<span>↗</span>
            </strong>
          </div>
          <div className="visual-bottom">
            <div>
              <span>DESTINATION 01</span>
              <strong>{ui.heroCity}</strong>
            </div>
            <span className="visual-compass">✳</span>
          </div>
        </div>
      </section>
      <div className="ticker" aria-hidden="true">
        <div>
          {ui.ticker.map((x, i) => (
            <span key={x}>
              {i % 2 === 0 ? (
                <span className="ticker-star">✳</span>
              ) : (
                <span className="ticker-arrow">↗</span>
              )}
              {x}
            </span>
          ))}
        </div>
      </div>
      <section className="section shell" id="universities" data-reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.catalogLabel}</span>
            <h2>{ui.catalogTitle}</h2>
          </div>
          <p>{ui.catalogSub}</p>
        </div>
        <Catalog preview />
      </section>
      <section className="section route-section shell" data-reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.planLabel}</span>
            <h2>{ui.planTitle}</h2>
          </div>
          <Link href="/guide" className="text-link">
            Полный маршрут <ArrowUpRight size={20} />
          </Link>
        </div>
        <div className="route-grid">
          {steps.slice(0, 4).map((s, i) => (
            <Link
              href={`/guide#step-${i + 1}`}
              key={s.title}
              className="route-card"
            >
              <span className="step-number">0{i + 1}</span>
              <ArrowUpRight className="step-arrow" size={18} />
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <div className="step-dot" />
            </Link>
          ))}
        </div>
        <div className="deadline-strip">
          <CalendarDays size={24} />
          <p>
            <strong>Даты имеют значение.</strong>
            <span>{ui.notice}</span>
          </p>
          <Link href="/guide#calendar" className="text-link">
            Календарь <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="section shell" id="budget" data-reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.budgetLabel}</span>
            <h2>{ui.budgetTitle}</h2>
          </div>
          <p>{ui.budgetSub}</p>
        </div>
        <Budget />
      </section>
      <section className="section shell residence-preview" data-reveal>
        <div className="residence-intro">
          <span className="eyebrow">{ui.residenceLabel}</span>
          <h2>{ui.residenceTitle}</h2>
          <p>Виза, адрес, страховка и студенческий ВНЖ — по шагам.</p>
          <Link href="/residence" className="button secondary">
            Разобраться с ВНЖ <ArrowUpRight size={20} />
          </Link>
          <span className="source-badge">
            <ShieldCheck size={15} />
            Источники: МИД и Göç İdaresi
          </span>
        </div>
        <div className="residence-pass">
          <div className="pass-heading">
            <span>STUDENT / TÜRKİYE</span>
            <ShieldCheck size={23} />
          </div>
          <div className="pass-symbol">
            TR<span>↗</span>
          </div>
          <h3>
            Твой студенческий
            <br />
            маршрут
          </h3>
          <div className="pass-tags">
            <span>Учёба</span>
            <span>Жильё</span>
            <span>ВНЖ</span>
          </div>
          <div className="pass-footer">
            <span>ПРОВЕРЬ УСЛОВИЯ ДО ПОЕЗДКИ</span>
            <span>▏▍▏▎▍▏▍▎▏▍▍▏</span>
          </div>
        </div>
      </section>
      <section
        className="section shell contact-section"
        id="contact"
        data-reveal
      >
        <div className="contact-copy">
          <span className="eyebrow">{ui.contactLabel}</span>
          <h2>{ui.contactTitle}</h2>
          <p>{ui.contactSub}</p>
          <div className="contact-person">
            <span className="person-avatar">
              L<span>↗</span>
            </span>
            <div>
              <strong>@limyrqq</strong>
              <a href={site.tel}>{site.phone}</a>
            </div>
          </div>
          <div className="contact-direct">
            <a
              className="text-link"
              href={site.telegram}
              target="_blank"
              rel="noreferrer"
            >
              <Send size={17} />
              Telegram <ArrowUpRight size={16} />
            </a>
            <a
              className="text-link"
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <LeadForm />
      </section>
    </main>
  );
}
