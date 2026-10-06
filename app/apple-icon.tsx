import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#c2f86b",
        color: "#111713",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 132,
        fontWeight: 800,
      }}
    >
      t.
    </div>,
    size,
  );
}
