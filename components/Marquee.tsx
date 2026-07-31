import { site } from "@/data/site";

/**
 * Two identical groups scrolling as one track — the second covers the gap the
 * first leaves as it exits, so the loop reads as continuous.
 */
export function Marquee() {
  const group = (
    <div className="marqueeGroup" aria-hidden="true">
      {site.marquee.map((item, i) => (
        <span key={`${item}-${i}`}>{item}</span>
      ))}
    </div>
  );

  return (
    <div className="marquee">
      <div className="marqueeTrack">
        {group}
        {group}
      </div>
      <span className="visually-hidden" style={{ display: "none" }}>
        {site.marquee.join(", ")}
      </span>
    </div>
  );
}
