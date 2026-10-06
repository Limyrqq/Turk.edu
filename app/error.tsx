"use client";
export default function ErrorPage({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main id="main" className="shell error-page">
      <span className="eyebrow">ОШИБКА ЗАГРУЗКИ</span>
      <h1>Попробуем ещё раз.</h1>
      <p>Не удалось загрузить страницу.</p>
      <button className="button primary" onClick={reset}>
        Повторить
      </button>
    </main>
  );
}
