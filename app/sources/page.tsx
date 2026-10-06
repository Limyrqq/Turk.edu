import type { Metadata } from "next";
import { universities } from "@/content/universities";
import { site } from "@/config/site";
export const metadata: Metadata = {
  title: "Источники и методика",
  alternates: { canonical: "/sources" },
};
export default function SourcesPage() {
  return (
    <main id="main" className="shell page-content prose-page">
      <span className="eyebrow">ПРОВЕРЯЕМАЯ ИНФОРМАЦИЯ</span>
      <h1>Источники и методика</h1>
      <p>
        Проверка: {site.checkedAt}. Все ссылки ниже ведут на университеты и
        государственные ресурсы.
      </p>
      <h2>Как выбраны 10 вузов</h2>
      <p>
        Это редакционная подборка для бакалавриата: академический профиль,
        разные города, языки, бюджеты и пути международного поступления. Порядок
        не является местом QS или THE. «Лучший» вуз зависит от специальности и
        возможностей кандидата.
      </p>
      <h2>Как читать стоимость</h2>
      <p>
        Годовая стоимость указывается с контекстом программы и учебного года.
        METU пересчитан из двух семестров. Koç, Ankara и Ege содержат примеры
        программ, а не универсальный тариф. Проживание и подготовительный год
        оплачиваются по отдельным условиям. Неподтверждённые цены отмечены явно.
      </p>
      <h2>Как читать сроки</h2>
      <p>
        Периоды 2026 — исторические опубликованные окна. Статус зафиксирован на
        30.09.2026; сайт не следит за объявлениями автоматически. Дополнительный
        набор не равен основному. Даты 2027 не переносятся из прошлогоднего
        календаря.
      </p>
      <div className="source-list">
        {universities.map((u) => (
          <section key={u.id}>
            <h3>{u.name}</h3>
            <a href={u.admissionUrl} target="_blank" rel="noreferrer">
              Условия / календарь ↗
            </a>
            <a href={u.feeUrl} target="_blank" rel="noreferrer">
              Тарифы / международный офис ↗
            </a>
          </section>
        ))}
      </div>
      <h2>Государственные ресурсы</h2>
      <ul>
        <li>
          <a href="https://www.mfa.gov.tr/yabancilarin-tabi-oldugu-vize-rejimi.tr.mfa">
            МИД Турции: визовые правила для Казахстана
          </a>
        </li>
        <li>
          <a href="https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa">
            МИД: общие визовые требования и паспорт
          </a>
        </li>
        <li>
          <a href="https://en.goc.gov.tr/residence-permit-types">
            Göç İdaresi: типы ВНЖ и страхование
          </a>
        </li>
        <li>
          <a href="https://e-ikamet.goc.gov.tr/">e-İkamet: оформление ВНЖ</a>
        </li>
        <li>
          <a href="https://edenklik.meb.gov.tr/">
            MEB: эквивалентность школьного образования
          </a>
        </li>
        <li>
          <a href="https://www.turkiyeburslari.gov.tr/announcements/turkiye-scholarships-2026-applications-121">
            Türkiye Scholarships: набор 2026
          </a>
        </li>
        <li>
          <a href="https://www.turkiyeburslari.gov.tr/calendar">
            Türkiye Scholarships: общий календарь
          </a>
        </li>
      </ul>
    </main>
  );
}
