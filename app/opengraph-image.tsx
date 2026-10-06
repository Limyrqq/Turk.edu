import { ImageResponse } from "next/og";
export const alt = "Turk.edu — твоё будущее в Турции";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        background: "#111713",
        color: "#f1f5ec",
        width: "100%",
        height: "100%",
        padding: 68,
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 32,
        }}
      >
        <span>turk.edu ↗</span>
        <span style={{ color: "#c2f86b", fontSize: 22 }}>
          KAZAKHSTAN → TÜRKİYE
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          fontWeight: 700,
          lineHeight: 1.15,
        }}
      >
        <span>Твоё будущее.</span>
        <span style={{ color: "#c2f86b" }}>Твоя Турция.</span>
      </div>
      <div style={{ display: "flex", gap: 45, fontSize: 25, color: "#b7c4b3" }}>
        <span>10 университетов</span>
        <span>Документы и сроки</span>
        <span>Студенческий ВНЖ</span>
      </div>
    </div>,
    size,
  );
}
