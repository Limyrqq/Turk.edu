"use client";
import { useState } from "react";
import { universities } from "@/content/universities";
import { ArrowUpRight, CircleHelp } from "@/components/ui/icons";
const money = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(n);
export function Budget() {
  const [id, setId] = useState("metu");
  const [monthly, setMonthly] = useState(650);
  const [months, setMonths] = useState(12);
  const [scholarship, setScholarship] = useState(0);
  const [rate, setRate] = useState(500);
  const u = universities.find((x) => x.id === id)!;
  const tuition = u.annualUsd! * (1 - scholarship / 100);
  const total = tuition + monthly * months;
  return (
    <div className="budget-panel">
      <div className="budget-inputs">
        <label>
          Университет / пример программы
          <select
            value={id}
            onChange={(e) => {
              setId(e.target.value);
              setScholarship(0);
            }}
          >
            {universities
              .filter((x) => x.annualUsd !== null)
              .map((x) => (
                <option key={x.id} value={x.id}>
                  {x.name}
                  {x.id === "ankara"
                    ? " · Business English"
                    : x.id === "koc"
                      ? " · International Relations"
                      : x.id === "ege"
                        ? " · Engineering Turkish"
                        : x.id === "metu"
                          ? " · Engineering"
                          : x.id === "bogazici"
                            ? " · Engineering"
                            : ""}
                </option>
              ))}
          </select>
        </label>
        <div className="range-heading">
          <label htmlFor="monthly">Жизнь / месяц</label>
          <strong>${money(monthly)}</strong>
        </div>
        <input
          id="monthly"
          type="range"
          min="300"
          max="1800"
          step="50"
          value={monthly}
          onChange={(e) => setMonthly(Number(e.target.value))}
        />
        <div className="range-labels">
          <span>$300</span>
          <span>$1 800</span>
        </div>
        <div className="budget-two">
          <label>
            Месяцев в Турции
            <select
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
            >
              <option value="12">12 месяцев</option>
              <option value="9">9 месяцев</option>
            </select>
          </label>
          <label>
            Скидка на обучение
            <select
              value={scholarship}
              onChange={(e) => setScholarship(Number(e.target.value))}
            >
              <option value="0">Без скидки</option>
              {[25, 50, 75, 100].map((n) => (
                <option key={n} value={n}>
                  {n}% · сценарий
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="budget-disclaimer">
          <CircleHelp size={15} />
          Жизнь — ваш сценарий, не официальный тариф. Скидка применяется только
          при подтверждении вузом.
        </p>
      </div>
      <div className="budget-result">
        <span className="eyebrow">ТВОЙ ПЛАН НА ГОД</span>
        <div className="budget-total">
          ${money(total)}
          <span>USD</span>
        </div>
        <label className="rate-label">
          Курс USD → KZT (введите свой)
          <input
            type="number"
            min="1"
            max="5000"
            value={rate}
            onChange={(e) =>
              setRate(Math.max(1, Math.min(5000, Number(e.target.value) || 1)))
            }
          />
        </label>
        <p className="kzt-total">≈ {money(total * rate)} ₸</p>
        <div className="budget-lines">
          <div>
            <span>Обучение</span>
            <strong>${money(tuition)}</strong>
          </div>
          <div>
            <span>Жизнь × {months} месяцев</span>
            <strong>${money(monthly * months)}</strong>
          </div>
        </div>
        <a
          href={u.feeUrl}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Проверить тариф <ArrowUpRight size={17} />
        </a>
        <p className="tiny">{u.feeNote}</p>
        <p className="tiny">
          Не включены перелёт, депозит жилья, ВНЖ, экзамены и переводы. Курс 500
          ₸ — редактируемый пример, не текущая котировка.
        </p>
      </div>
    </div>
  );
}
