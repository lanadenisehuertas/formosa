/** Small decorative marks. Purely ornamental — always aria-hidden. */

export function Sparkle({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 0 C22 14 26 18 40 20 C26 22 22 26 20 40 C18 26 14 22 0 20 C14 18 18 14 20 0 Z"
        fill={color}
      />
    </svg>
  );
}

export function Squiggle({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 120 40" className={className} aria-hidden="true" fill="none">
      <path
        d="M4 30 C24 4 44 4 62 22 C74 34 88 34 100 20"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M92 12 L102 19 L94 28"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Blob({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 2 C64 2 70 16 82 22 C96 29 100 44 94 58 C88 73 74 76 62 86 C49 96 34 96 24 84 C13 71 2 62 4 47 C6 31 18 24 28 15 C36 7 40 2 50 2 Z"
        fill={color}
      />
    </svg>
  );
}
