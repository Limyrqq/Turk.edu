"use client";
import { useSyncExternalStore } from "react";
import { documents } from "@/content/guide";
import { Check, FileText } from "@/components/ui/icons";
let fallback = "[]";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("turk-document-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("turk-document-change", callback);
  };
}
function snapshot() {
  try {
    return localStorage.getItem("turk-documents") || fallback;
  } catch {
    return fallback;
  }
}
function serverSnapshot() {
  return "[]";
}
function writeSnapshot(value: string) {
  fallback = value;
  try {
    localStorage.setItem("turk-documents", value);
  } catch {}
  window.dispatchEvent(new Event("turk-document-change"));
}
export function Checklist() {
  const raw = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  let checked: string[] = [];
  try {
    const value: unknown = JSON.parse(raw);
    if (Array.isArray(value))
      checked = value.filter(
        (x): x is string =>
          typeof x === "string" && documents.some((d) => d.title === x),
      );
  } catch {}
  function setChecked(next: string[] | ((previous: string[]) => string[])) {
    writeSnapshot(
      JSON.stringify(typeof next === "function" ? next(checked) : next),
    );
  }
  return (
    <div className="checklist">
      <div className="checklist-heading">
        <span>
          <FileText size={20} />
          Твои документы
        </span>
        <strong>
          {checked.length}/{documents.length}
        </strong>
      </div>
      <div className="progress-track">
        <span
          style={{ transform: `scaleX(${checked.length / documents.length})` }}
        />
      </div>
      <p className="muted tiny">
        Отметки сохраняются только в этом браузере. Итоговый список определяет
        выбранный вуз.
      </p>
      {documents.map((d) => (
        <label
          key={d.title}
          className={`checklist-item ${checked.includes(d.title) ? "checked" : ""}`}
        >
          <input
            type="checkbox"
            checked={checked.includes(d.title)}
            onChange={() =>
              setChecked((c) =>
                c.includes(d.title)
                  ? c.filter((x) => x !== d.title)
                  : [...c, d.title],
              )
            }
          />
          <span className="check-box" aria-hidden="true">
            {checked.includes(d.title) && <Check size={15} />}
          </span>
          <span>
            <strong>{d.title}</strong>
            <small>{d.note}</small>
          </span>
        </label>
      ))}
      <button className="text-link" onClick={() => setChecked([])}>
        Сбросить отметки
      </button>
    </div>
  );
}
