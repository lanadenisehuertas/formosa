import { paragraphize } from "@/lib/text";

/** Renders a long string as readable paragraphs rather than one wall of text. */
export function Prose({
  text,
  className = "briefProse",
  target,
}: {
  text: string;
  className?: string;
  target?: number;
}) {
  const paragraphs = paragraphize(text, target);

  return (
    <div className={className}>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
}
