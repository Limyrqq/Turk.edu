"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import { Menu, X, ArrowUpRight, Sun, Moon } from "@/components/ui/icons";
export function Header() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const pathname = usePathname();
  function toggleTheme() {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
  }
  return (
    <header className="header">
      <div className="shell header-inner">
        <Link className="brand" href="/">
          <span className="brand-symbol" aria-hidden="true">
            t<span>↗</span>
          </span>
          turk<span className="brand-dot">.</span>edu
        </Link>
        <nav className="desktop-nav" aria-label="Главная навигация">
          {site.navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={light ? "Тёмная тема" : "Светлая тема"}
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            className="header-contact"
            href={site.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Обсудить поступление <ArrowUpRight size={17} />
          </a>
          <button
            className="icon-button mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Меню"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Мобильная навигация"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {site.navigation.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <a href={site.telegram} onClick={() => setOpen(false)}>
            Написать в Telegram <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
    </header>
  );
}
