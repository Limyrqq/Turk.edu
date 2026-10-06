"use client";
export default function GlobalError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="ru">
      <body
        style={{
          background: "#111713",
          color: "#f1f5ec",
          fontFamily: "sans-serif",
          padding: 48,
        }}
      >
        <main>
          <h1>Не удалось открыть сайт</h1>
          <button onClick={reset}>Повторить загрузку</button>
        </main>
      </body>
    </html>
  );
}
