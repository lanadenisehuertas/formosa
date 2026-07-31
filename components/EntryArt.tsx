/**
 * Concept illustrations — one per entry, keyed by slug.
 *
 * Spot illustrations rather than product renders: these concepts are unbuilt,
 * and a photoreal mockup would imply hardware that exists. Each drawing shows
 * the specific mechanism its proposal claims, so the picture is an argument.
 *
 * Shared construction so the seven read as one set across seven card colours:
 *   · a soft white backdrop disc lifts the subject off the accent
 *   · every solid form casts a hard offset shadow, echoing the cards themselves
 *   · cream bodies, ink outlines, violet for the working part, pink for accents
 */

const INK = "#16142a";
const CREAM = "#fffdf7";
const CREAM_2 = "#efe6d3";
const VIOLET = "#4b3fd4";
const VIOLET_2 = "#8f86ee";
const PINK = "#f5399b";
const SHADOW = "rgba(22, 20, 42, 0.17)";

const SHIFT = "translate(4 5)";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      stroke={INK}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="100" cy="74" r="64" fill="#ffffff" opacity={0.4} stroke="none" />
      {children}
    </svg>
  );
}

/** Four-point star, for the bit of life a pure diagram lacks. */
function Star({
  x,
  y,
  size = 1,
  color = PINK,
}: {
  x: number;
  y: number;
  size?: number;
  color?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      <path
        d="M0 -8 C1.4 -2.6 2.6 -1.4 8 0 C2.6 1.4 1.4 2.6 0 8 C-1.4 2.6 -2.6 1.4 -8 0 C-2.6 -1.4 -1.4 -2.6 0 -8 Z"
        fill={color}
        stroke="none"
      />
    </g>
  );
}

const INSOLE =
  "M148 16 C162 16 171 25 171 36 C171 47 164 51 162 60 C160 69 164 76 164 85 C164 95 157 102 147 102 C137 102 130 95 130 85 C130 76 134 69 132 60 C130 51 123 47 123 36 C123 25 134 16 148 16 Z";

/**
 * PedalPrint — a pedal and its spindle, a plantar-pressure insole, and the two
 * signals they produce running half a period apart. The offset between the
 * waves is the measurement the patent claim rests on.
 */
function PedalPrintArt() {
  return (
    <Frame>
      <g transform={SHIFT} fill={SHADOW} stroke="none">
        <rect x="22" y="58" width="58" height="19" rx="6" />
        <path d={INSOLE} />
        <circle cx="96" cy="68" r="9" />
      </g>

      <path d="M30 42 A36 36 0 0 1 98 38" strokeWidth={2.5} />
      <path d="M90 30 l9 8 l-11 6" strokeWidth={2.5} />

      <path d={INSOLE} fill={CREAM} />
      <path
        d="M134 34 C134 26 141 22 148 22 C155 22 162 26 162 34"
        stroke={CREAM_2}
        strokeWidth={2.5}
      />
      <circle cx="144" cy="38" r="8" fill={VIOLET} stroke="none" />
      <circle cx="158" cy="45" r="5" fill={VIOLET_2} stroke="none" />
      <circle cx="146" cy="88" r="9" fill={VIOLET} stroke="none" />
      <circle cx="143" cy="85" r="3" fill={VIOLET_2} stroke="none" />

      <rect x="22" y="58" width="58" height="19" rx="6" fill={CREAM} />
      <path d="M36 62 l0 11 M48 62 l0 11 M60 62 l0 11" stroke={CREAM_2} strokeWidth={3} />
      <path d="M80 67 l10 0" strokeWidth={5.5} />
      <circle cx="96" cy="68" r="9" fill={VIOLET} />
      <circle cx="93" cy="65" r="3" fill={VIOLET_2} stroke="none" />

      <path d="M12 126 q14 -13 28 0 t28 0 t28 0 t28 0 t28 0 t28 0" strokeWidth={3.5} />
      <path
        d="M26 126 q14 -13 28 0 t28 0 t28 0 t28 0 t28 0"
        stroke={VIOLET}
        strokeWidth={3.5}
      />

      <Star x={176} y={26} size={0.85} />
      <Star x={20} y={104} size={0.6} color={VIOLET_2} />
    </Frame>
  );
}

/**
 * DermaPhase — a patch adhered to the skin, water escaping around it, and the
 * two signals leaving one origin then pulling apart. The widening gap, not
 * either line's level, is what predicts the flare.
 */
function DermaPhaseArt() {
  return (
    <Frame>
      <path d="M12 66 L188 66 L188 82 L12 82 Z" fill={CREAM_2} stroke="none" />
      <path d="M12 66 L188 66" strokeWidth={3} />
      <path d="M28 74 l6 0 M52 76 l7 0 M92 74 l8 0 M132 76 l7 0 M166 74 l6 0" stroke={CREAM} strokeWidth={2.5} />

      <path d="M34 58 l0 -24 M28 42 l6 -7 l6 7" strokeWidth={2.5} />
      <path d="M50 58 l0 -15 M44 49 l6 -7 l6 7" strokeWidth={2.5} />
      <path d="M160 58 l0 -24 M154 42 l6 -7 l6 7" strokeWidth={2.5} />

      <g transform="rotate(-4 100 50)">
        <rect x="66" y="36" width="76" height="31" rx="13" fill={SHADOW} stroke="none" transform={SHIFT} />
        <rect x="66" y="36" width="76" height="31" rx="13" fill={CREAM} />
        <circle cx="88" cy="51" r="8" fill={VIOLET} stroke="none" />
        <circle cx="85" cy="48" r="3" fill={VIOLET_2} stroke="none" />
        <rect x="112" y="45" width="14" height="14" rx="4" fill={INK} stroke="none" />
        <rect x="115" y="48" width="4" height="4" rx="1" fill={VIOLET_2} stroke="none" />
      </g>

      <circle cx="32" cy="110" r="6" fill={VIOLET} stroke="none" />
      <path d="M32 110 C76 110 118 106 176 94" strokeWidth={3.5} />
      <path d="M32 110 C76 110 118 118 176 140" stroke={VIOLET} strokeWidth={3.5} />
      <path
        d="M162 97 L162 133 M157 97 l10 0 M157 133 l10 0"
        strokeWidth={2.25}
        opacity={0.8}
      />

      <Star x={176} y={30} size={0.8} />
    </Frame>
  );
}

/**
 * PulseWeave — a calf and foot wearing the sleeve, with one zone contracting.
 * The arrows sit on that band only: the claim is zone-specific actuation, not
 * a whole-garment squeeze.
 */
function PulseWeaveArt() {
  const foot =
    "M86 110 L84 124 C84 131 91 135 100 135 L124 135 C129 135 129 128 124 126 L114 120 L114 110 Z";
  const calf =
    "M80 14 C70 30 64 50 70 68 C74 84 88 98 88 114 L112 114 C112 98 126 84 130 68 C136 50 130 30 120 14 Z";

  return (
    <Frame>
      <g transform={SHIFT} fill={SHADOW} stroke="none">
        <path d={foot} />
        <path d={calf} />
      </g>

      <path d={foot} fill={CREAM} strokeWidth={2.5} />
      <path d={calf} fill={CREAM} />

      <path
        d="M72 42 l9 -7 l9 7 l9 -7 l9 7 l9 -7 l9 7
           M76 98 l8 -6 l8 6 l8 -6 l8 6 l8 -6"
        stroke={CREAM_2}
        strokeWidth={2.5}
      />

      <path
        d="M69 60 L131 60 L128 84 L72 84 Z"
        fill={VIOLET}
        fillOpacity={0.28}
        stroke={VIOLET}
        strokeWidth={2.5}
      />
      <path d="M74 72 l52 0" stroke={VIOLET} strokeWidth={2.5} opacity={0.55} />

      <rect x="90" y="26" width="19" height="14" rx="5" fill={SHADOW} stroke="none" transform={SHIFT} />
      <rect x="90" y="26" width="19" height="14" rx="5" fill={VIOLET} strokeWidth={2.5} />
      <circle cx="95" cy="31" r="2.5" fill={VIOLET_2} stroke="none" />

      <path d="M16 72 l24 0 M32 64 l8 8 l-8 8" strokeWidth={3.5} />
      <path d="M184 72 l-24 0 M168 64 l-8 8 l8 8" strokeWidth={3.5} />

      <Star x={172} y={30} size={0.8} />
      <Star x={28} y={112} size={0.6} color={VIOLET_2} />
    </Frame>
  );
}

/**
 * SYNAPSE — a city and its digital twin above it, one node per building, linked
 * by dashed lines. The haloed node is a risk the model flagged before anything
 * happened on the ground.
 */
function SynapseArt() {
  const blocks = [
    { x: 24, y: 102 },
    { x: 58, y: 90 },
    { x: 116, y: 96 },
    { x: 150, y: 106 },
  ];

  return (
    <Frame>
      <path d="M36 58 L70 36 M70 36 L128 42 M128 42 L162 60 M70 36 L162 60" strokeWidth={2.5} />
      <path
        d="M36 98 L36 68 M70 86 L70 48 M128 92 L128 54 M162 102 L162 70"
        strokeWidth={2}
        strokeDasharray="4 5"
        opacity={0.6}
      />

      <g transform={SHIFT} fill={SHADOW} stroke="none">
        {blocks.map((b) => (
          <rect key={b.x} x={b.x} y={b.y} width="26" height={128 - b.y} rx="3" />
        ))}
      </g>

      {blocks.map((b) => (
        <g key={b.x}>
          <rect x={b.x} y={b.y} width="26" height={128 - b.y} rx="3" fill={CREAM} strokeWidth={2.5} />
          <path
            d={`M${b.x + 7} ${b.y + 10} l0 5 M${b.x + 18} ${b.y + 10} l0 5 M${b.x + 7} ${b.y + 22} l0 5 M${b.x + 18} ${b.y + 22} l0 5`}
            stroke={CREAM_2}
            strokeWidth={3}
          />
        </g>
      ))}
      <path d="M12 128 L188 128" strokeWidth={3.5} />

      <circle cx="36" cy="58" r="9" fill={CREAM} strokeWidth={2.5} />
      <circle cx="128" cy="42" r="9" fill={CREAM} strokeWidth={2.5} />
      <circle cx="162" cy="60" r="9" fill={CREAM} strokeWidth={2.5} />
      <circle cx="70" cy="36" r="21" fill={VIOLET} opacity={0.18} stroke="none" />
      <circle cx="70" cy="36" r="15" strokeWidth={2} strokeDasharray="3 4" />
      <circle cx="70" cy="36" r="10" fill={VIOLET} />
      <circle cx="67" cy="33" r="3" fill={VIOLET_2} stroke="none" />

      <Star x={182} y={28} size={0.8} />
    </Frame>
  );
}

/**
 * CycleSync — the cycle as a four-phase ring with the current phase lit, and
 * training load inside it varying by phase. That the bars differ is the product.
 */
function CycleSyncArt() {
  return (
    <Frame>
      <circle cx="100" cy="70" r="46" fill={SHADOW} stroke="none" transform={SHIFT} />
      <circle cx="100" cy="70" r="46" fill={CREAM} />

      <path d="M100 24 A46 46 0 0 1 146 70" stroke={VIOLET_2} strokeWidth={11} />
      <path d="M100 24 A46 46 0 0 1 146 70" stroke={VIOLET} strokeWidth={5} />
      <circle cx="100" cy="70" r="46" />
      <circle cx="100" cy="70" r="31" strokeWidth={2.5} stroke={CREAM_2} />

      <path
        d="M100 24 L100 38 M146 70 L132 70 M100 116 L100 102 M54 70 L68 70"
        strokeWidth={2.5}
      />

      <path d="M76 92 L124 92" strokeWidth={2.5} />
      <g transform={SHIFT} fill={SHADOW} stroke="none">
        <rect x="79" y="82" width="9" height="10" rx="2" />
        <rect x="91" y="70" width="9" height="22" rx="2" />
        <rect x="103" y="62" width="9" height="30" rx="2" />
        <rect x="115" y="78" width="9" height="14" rx="2" />
      </g>
      <rect x="79" y="82" width="9" height="10" rx="2" fill={CREAM} strokeWidth={2.5} />
      <rect x="91" y="70" width="9" height="22" rx="2" fill={VIOLET_2} strokeWidth={2.5} />
      <rect x="103" y="62" width="9" height="30" rx="2" fill={VIOLET} strokeWidth={2.5} />
      <rect x="115" y="78" width="9" height="14" rx="2" fill={CREAM} strokeWidth={2.5} />

      <circle cx="133" cy="37" r="7" fill={CREAM} strokeWidth={2.5} />

      <Star x={178} y={116} size={0.75} />
      <Star x={26} y={34} size={0.6} color={VIOLET_2} />
    </Frame>
  );
}

/**
 * Companion Mirror — a home with two independent passive sensors: a smart bed
 * and a companion robot, each emitting its own signal. The robot has a speaker
 * grille and no optics whatsoever, because the premise is that nothing in the
 * house is watching.
 */
function CompanionMirrorArt() {
  const house = "M34 80 L100 32 L166 80 L166 128 L34 128 Z";

  return (
    <Frame>
      <path d={house} fill={SHADOW} stroke="none" transform={SHIFT} />
      <path d={house} fill={CREAM} />
      <path d="M34 80 L166 80" stroke={CREAM_2} strokeWidth={2.5} />

      <path d="M56 120 L56 104 M94 120 L94 104" strokeWidth={2.5} />
      <path d="M52 104 L52 115 L98 115 L98 104" fill={CREAM} strokeWidth={2.5} />
      <rect x="52" y="104" width="46" height="11" rx="4" fill={VIOLET} stroke="none" />
      <rect x="52" y="104" width="46" height="5" rx="2.5" fill={VIOLET_2} stroke="none" />
      <rect x="56" y="94" width="17" height="10" rx="4" fill={CREAM} strokeWidth={2.5} />

      <path d="M112 108 l-8 0 M146 108 l8 0" strokeWidth={2.5} />
      <rect x="114" y="98" width="30" height="28" rx="9" fill={CREAM} strokeWidth={2.5} />
      <rect x="117" y="78" width="24" height="20" rx="8" fill={CREAM} strokeWidth={2.5} />
      <path d="M123 85 l12 0 M123 91 l12 0" stroke={CREAM_2} strokeWidth={3} />
      <path d="M129 78 L129 70" strokeWidth={2} />
      <circle cx="129" cy="66" r="4" fill={VIOLET} stroke="none" />

      <path d="M152 88 a13 13 0 0 1 0 18" stroke={VIOLET} strokeWidth={2.5} />
      <path d="M159 81 a21 21 0 0 1 0 32" stroke={VIOLET_2} strokeWidth={2.5} />
      <path d="M40 94 a13 13 0 0 0 0 18" stroke={VIOLET} strokeWidth={2.5} />
      <path d="M33 87 a21 21 0 0 0 0 32" stroke={VIOLET_2} strokeWidth={2.5} />

      <Star x={100} y={20} size={0.8} />
    </Frame>
  );
}

/**
 * BinLang Check — an AR viewfinder guiding a self-exam of the dental arch, with
 * one lesion flagged. The brackets are the guidance layer; the ringed spot is
 * what routes into a telemedicine consult.
 */
function BinLangCheckArt() {
  const arch =
    "M54 42 C54 102 76 120 100 120 C124 120 146 102 146 42 L122 42 C122 90 114 98 100 98 C86 98 78 90 78 42 Z";

  return (
    <Frame>
      <path
        d="M28 52 l0 -24 l24 0 M148 28 l24 0 l0 24 M172 106 l0 24 l-24 0 M52 130 l-24 0 l0 -24"
        strokeWidth={4}
      />

      {/* Palate behind the arch. Kept neutral — a violet tint went muddy brown
          against the orange card. */}
      <path
        d="M78 42 C78 90 86 98 100 98 C114 98 122 90 122 42"
        fill={CREAM_2}
        stroke="none"
      />

      <path d={arch} fill={SHADOW} stroke="none" transform={SHIFT} />
      <path d={arch} fill={CREAM} strokeWidth={2.75} />
      <path
        d="M54 58 L78 58 M57 74 L79 72 M64 90 L83 84 M76 106 L91 95
           M124 106 L109 95 M136 90 L117 84 M143 74 L121 72 M146 58 L122 58"
        stroke={CREAM_2}
        strokeWidth={2.5}
      />

      <circle cx="88" cy="103" r="17" fill={VIOLET} opacity={0.16} stroke="none" />
      <circle cx="88" cy="103" r="12" strokeWidth={2.25} strokeDasharray="3 3" />
      <circle cx="88" cy="103" r="6.5" fill={VIOLET} stroke="none" />

      <Star x={176} y={78} size={0.8} />
      <Star x={24} y={80} size={0.6} color={VIOLET_2} />
    </Frame>
  );
}

const ART: Record<string, () => React.JSX.Element> = {
  pedalprint: PedalPrintArt,
  dermaphase: DermaPhaseArt,
  pulseweave: PulseWeaveArt,
  synapse: SynapseArt,
  cyclesync: CycleSyncArt,
  "companion-mirror": CompanionMirrorArt,
  "binlang-check": BinLangCheckArt,
};

/** Renders nothing for a slug with no illustration, so new entries don't break. */
export function EntryArt({ slug }: { slug: string }) {
  const Art = ART[slug];
  return Art ? <Art /> : null;
}

export function hasEntryArt(slug: string) {
  return slug in ART;
}
