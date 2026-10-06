import type { Metadata } from "next";
import { Catalog } from "@/components/sections/catalog";
import { ui } from "@/content/ui";
export const metadata: Metadata = {
  title: "10 университетов Турции",
  description:
    "Сравнение 10 вузов для абитуриента из Казахстана: направления, язык, стоимость, сроки и официальные источники.",
  alternates: { canonical: "/universities" },
};
export default function UniversitiesPage() {
  return (
    <main id="main" className="shell page-content">
      <div className="page-heading">
        <span className="eyebrow">ТВОЙ АКАДЕМИЧЕСКИЙ ГОРИЗОНТ</span>
        <h1>Найди свой университет.</h1>
        <p>{ui.catalogSub}</p>
        <span className="verified">{ui.verified}</span>
      </div>
      <div className="notice-bar">{ui.notice}</div>
      <Catalog />
    </main>
  );
}
