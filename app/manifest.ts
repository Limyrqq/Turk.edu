import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Turk.edu — университеты Турции",
    short_name: "Turk.edu",
    start_url: "/",
    display: "standalone",
    background_color: "#111713",
    theme_color: "#c2f86b",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
