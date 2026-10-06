import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Effects } from "@/components/layout/effects";
import { site } from "@/config/site";
import "./globals.css";
const manropeRu = localFont({
  src: "../node_modules/@fontsource-variable/manrope/files/manrope-cyrillic-wght-normal.woff2",
  variable: "--font-ru",
  display: "swap",
});
const manropeLatin = localFont({
  src: "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-latin",
  display: "swap",
});
const space = localFont({
  src: "../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-title",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Turk.edu — твоё будущее в Турции",
    template: "%s | Turk.edu",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: site.name,
    title: "Твоё будущее. Твоя Турция.",
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg", apple: "/apple-icon" },
  manifest: "/manifest.webmanifest",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111713",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${manropeRu.variable} ${manropeLatin.variable} ${space.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Перейти к содержимому
        </a>
        <Header />
        {children}
        <Footer />
        <Effects />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: site.name,
              url: site.url,
              description: site.description,
              inLanguage: "ru",
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
