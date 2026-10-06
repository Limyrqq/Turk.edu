import Link from "next/link";
import { site } from "@/config/site";
import { ui } from "@/content/ui";
import { Send, MessageCircle, ArrowUpRight } from "@/components/ui/icons";
export function Footer() {
  return (
    <>
      <footer className="footer shell">
        <div className="footer-top">
          <Link className="brand" href="/">
            turk<span className="brand-dot">.</span>edu
          </Link>
          <p>{ui.footerNote}</p>
          <a href={site.tel}>
            {site.phone} <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {site.name}</span>
          <Link href="/sources">Источники и методика</Link>
          <Link href="/privacy">Конфиденциальность</Link>
          <span>Создано для твоего следующего шага ↗</span>
        </div>
      </footer>
      <aside className="messengers" aria-label="Связаться">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Написать в WhatsApp"
        >
          <MessageCircle size={21} />
        </a>
        <a
          href={site.telegram}
          target="_blank"
          rel="noreferrer"
          aria-label="Написать в Telegram"
        >
          <Send size={21} />
        </a>
      </aside>
    </>
  );
}
