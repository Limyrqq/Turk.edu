"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { universities, type University } from "@/content/universities";
import { ui } from "@/content/ui";
import {
  ArrowUpRight,
  MapPin,
  Search,
  X,
  Plus,
  Check,
} from "@/components/ui/icons";
export function Catalog({ preview = false }: { preview?: boolean }) {
  const [field, setField] = useState("Все направления");
  const [city, setCity] = useState("Все города");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const dialog = useRef<HTMLDialogElement>(null);
  const list = universities.filter(
    (u) =>
      (field === "Все направления" || u.fields.includes(field)) &&
      (city === "Все города" || u.city === city) &&
      `${u.name} ${u.fullName}`
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase()),
  );
  const shown = preview ? list.slice(0, 3) : list;
  function toggle(id: string) {
    setSelected((s) =>
      s.includes(id)
        ? s.filter((x) => x !== id)
        : s.length < 3
          ? [...s, id]
          : s,
    );
  }
  function close() {
    dialog.current?.close();
    document.body.style.overflow = "";
  }
  return (
    <div className="catalog">
      <div className="filter-row">
        <div className="filter-chips" role="group" aria-label="Направления">
          {ui.filters.map((f) => (
            <button
              key={f}
              onClick={() => setField(f)}
              aria-pressed={field === f}
              className={field === f ? "chip active" : "chip"}
            >
              {f}
            </button>
          ))}
        </div>
        <label className="city-select">
          <MapPin size={16} />
          <span className="sr-only">Город</span>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            {["Все города", "Анкара", "Стамбул", "Измир"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      {!preview && (
        <div className="catalog-tools">
          <label className="search-input">
            <Search size={18} />
            <span className="sr-only">Поиск университета</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Найти университет"
            />
          </label>
          <span>{list.length} из 10 университетов</span>
          <button
            className="button small secondary"
            disabled={selected.length < 2}
            onClick={() => {
              dialog.current?.showModal();
              document.body.style.overflow = "hidden";
            }}
          >
            Сравнить {selected.length}/3
          </button>
        </div>
      )}
      <div className="university-grid">
        {shown.map((u, index) => (
          <UniversityCard
            key={u.id}
            university={u}
            index={universities.indexOf(u) + 1}
            selected={selected.includes(u.id)}
            onSelect={preview ? undefined : () => toggle(u.id)}
            selectionDisabled={
              !selected.includes(u.id) && selected.length === 3
            }
            featured={index === 0}
          />
        ))}
      </div>
      {shown.length === 0 && (
        <div className="empty-state">
          <Search size={30} />
          <p>{ui.empty}</p>
          <button
            className="button secondary"
            onClick={() => {
              setField("Все направления");
              setCity("Все города");
              setQuery("");
            }}
          >
            Сбросить фильтры
          </button>
        </div>
      )}
      {preview && (
        <div className="catalog-bottom">
          <p>{ui.methodology}</p>
          <Link className="text-link" href="/universities">
            Все 10 университетов <ArrowUpRight size={20} />
          </Link>
        </div>
      )}
      {!preview && (
        <>
          <p className="muted methodology">{ui.methodology}</p>
          <dialog
            ref={dialog}
            aria-labelledby="compare-title"
            className="comparison-dialog"
            onCancel={close}
            onClick={(e) => {
              if (e.target === dialog.current) close();
            }}
          >
            <div className="dialog-heading">
              <h2 id="compare-title">Твой короткий список</h2>
              <button
                className="icon-button"
                onClick={close}
                aria-label="Закрыть сравнение"
              >
                <X />
              </button>
            </div>
            <div className="comparison-grid">
              {universities
                .filter((u) => selected.includes(u.id))
                .map((u) => (
                  <article key={u.id}>
                    <h3>{u.name}</h3>
                    <p>
                      {u.city} · {u.type}
                    </p>
                    <dl>
                      <dt>Язык</dt>
                      <dd>{u.languages}</dd>
                      <dt>Обучение / год</dt>
                      <dd>{u.fee}</dd>
                      <dt>Контекст тарифа</dt>
                      <dd>{u.feeNote}</dd>
                      <dt>Последний проверенный набор</dt>
                      <dd>{u.deadline}</dd>
                    </dl>
                    <Link
                      href={`/universities/${u.id}`}
                      className="text-link"
                      onClick={close}
                    >
                      Подробнее <ArrowUpRight size={18} />
                    </Link>
                  </article>
                ))}
            </div>
          </dialog>
        </>
      )}
    </div>
  );
}
function UniversityCard({
  university: u,
  index,
  selected,
  onSelect,
  selectionDisabled,
  featured,
}: {
  university: University;
  index: number;
  selected: boolean;
  onSelect?: () => void;
  selectionDisabled: boolean;
  featured: boolean;
}) {
  return (
    <article
      className={`university-card accent-${u.accent} ${featured ? "featured" : ""}`}
    >
      <div className="card-art" aria-hidden="true">
        <span className="card-index">
          {String(index).padStart(2, "0")} / 10
        </span>
        <svg viewBox="0 0 500 170">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M90 160V80L250 20L410 80V160M90 80H410M120 90V155M160 90V155M200 90V155M250 90V155M300 90V155M340 90V155M380 90V155M70 160H430M60 165H440" />
            <path d="M250 20V0M230 12H270M90 80L250 34L410 80M95 85H405" />
            <circle cx="250" cy="60" r="11" />
          </g>
        </svg>
        <span className="art-word">{u.name.split(" / ")[0]}</span>
        <span className="art-orbit" />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span>
            <MapPin size={13} />
            {u.city}
          </span>
          <span>{u.type === "Частный" ? "Частный" : "Государственный"}</span>
        </div>
        <Link href={`/universities/${u.id}`} className="card-title">
          <h3>{u.name}</h3>
          <ArrowUpRight size={24} />
        </Link>
        <p className="university-full-name">{u.fullName}</p>
        <div className="tags">
          {u.fields.slice(0, 2).map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
        <div className="card-bottom">
          <div>
            <span className="fee-label">Обучение / год*</span>
            <strong>{u.fee}</strong>
          </div>
          {onSelect ? (
            <button
              className="compare-toggle"
              aria-label={`${selected ? "Убрать" : "Добавить"} ${u.name} ${selected ? "из сравнения" : "в сравнение"}`}
              aria-pressed={selected}
              disabled={selectionDisabled}
              onClick={onSelect}
            >
              {selected ? <Check size={16} /> : <Plus size={16} />}
            </button>
          ) : (
            <Link
              className="card-round-link"
              href={`/universities/${u.id}`}
              aria-label={`Подробнее о ${u.name}`}
            >
              <ArrowUpRight size={18} />
            </Link>
          )}
        </div>
        <p className="fee-footnote">
          *{" "}
          {u.annualUsd === null
            ? "Проверьте тариф программы"
            : u.id === "koc"
              ? "Пример: International Relations"
              : u.id === "ankara"
                ? "Примеры программ, 2026/27"
                : u.id === "ege"
                  ? "Пример: Engineering Turkish"
                  : u.id === "bogazici"
                    ? "Официальная страница тарифов"
                    : "2026/27, до стипендии"}
        </p>
      </div>
    </article>
  );
}
