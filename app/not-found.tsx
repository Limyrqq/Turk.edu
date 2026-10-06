import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell error-page">
      <span className="eyebrow">404 / ДРУГОЙ МАРШРУТ</span>
      <h1>Здесь пока нет кампуса.</h1>
      <p>Продолжи поиск на странице университетов.</p>
      <Link href="/universities" className="button primary">
        Выбрать университет ↗
      </Link>
    </main>
  );
}
