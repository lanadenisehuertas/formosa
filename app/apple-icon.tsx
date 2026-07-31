import { ImageResponse } from "next/og";

/**
 * iOS home-screen icon. Generated at build time rather than checked in as a
 * binary, and drawn with boxes because the SVG favicon's paths aren't available
 * to the image renderer.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const INK = "#4b3fd4";
const LIME = "#d6f24e";
const PINK = "#f5399b";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          background: INK,
        }}
      >
        {/* stem */}
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 38,
            width: 26,
            height: 104,
            borderRadius: 8,
            background: LIME,
          }}
        />
        {/* upper arm */}
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 38,
            width: 80,
            height: 25,
            borderRadius: 8,
            background: LIME,
          }}
        />
        {/* middle arm */}
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 78,
            width: 58,
            height: 25,
            borderRadius: 8,
            background: LIME,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 121,
            top: 116,
            width: 30,
            height: 30,
            borderRadius: 999,
            background: PINK,
          }}
        />
      </div>
    ),
    size
  );
}
