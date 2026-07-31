/**
 * Colour-block boundary. `top` paints the strip behind the curve, `bottom`
 * fills the wave itself — so the divider reads as the next section spilling
 * upward into the previous one.
 */
export function Wave({
  top,
  bottom,
  flip = false,
}: {
  top: string;
  bottom: string;
  flip?: boolean;
}) {
  return (
    <div className="wave" style={{ background: top }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="waveSvg"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        <path
          d="M0,46 C160,90 300,8 480,34 C660,60 780,96 960,64 C1120,36 1280,2 1440,30 L1440,90 L0,90 Z"
          fill={bottom}
        />
      </svg>
    </div>
  );
}
