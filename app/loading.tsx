export default function Loading() {
  return (
    <main
      id="main"
      className="shell loading-page"
      aria-busy="true"
      aria-label="Загрузка"
    >
      <div className="skeleton title-skeleton" />
      <div className="skeleton line-skeleton" />
      <div className="university-grid">
        {[1, 2, 3].map((x) => (
          <div key={x} className="skeleton card-skeleton" />
        ))}
      </div>
    </main>
  );
}
