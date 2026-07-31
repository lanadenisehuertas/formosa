/**
 * Guard: paragraphize must only ever insert breaks — never lose, reorder or
 * alter a word. Run with `npx tsx scripts/check-prose.ts`.
 */
import { entries } from "../data/entries";
import { paragraphize } from "../lib/text";

const norm = (s: string) => s.replace(/\s+/g, " ").trim();

let checked = 0;
let failed = 0;
const rows: { entry: string; field: string; chars: number; parts: number; target: number }[] = [];

for (const entry of entries) {
  const fields: [string, string | undefined, number][] = [
    ["problem", entry.problem, 400],
    ["coreIdea", entry.coreIdea, 400],
    ["situation", entry.brief?.situation, 480],
    ["businessModel", entry.brief?.businessModel, 480],
    ["taiwanSolutions", entry.brief?.taiwanSolutions, 480],
    ["ecosystem", entry.brief?.ecosystem, 480],
    ["outcomes", entry.brief?.outcomes, 480],
    ["fundAllocation", entry.brief?.fundAllocation, 480],
    ["pest.political", entry.brief?.pest?.political, 620],
    ["pest.economic", entry.brief?.pest?.economic, 620],
    ["pest.social", entry.brief?.pest?.social, 620],
    ["pest.technological", entry.brief?.pest?.technological, 620],
  ];

  for (const [name, value, target] of fields) {
    if (!value) continue;
    checked++;
    const parts = paragraphize(value, target);
    if (norm(parts.join(" ")) !== norm(value)) {
      failed++;
      console.error(`MISMATCH ${entry.slug}.${name}`);
    }
    rows.push({ entry: entry.slug, field: name, chars: value.length, parts, target } as never);
    rows[rows.length - 1].parts = parts.length;
  }
}

console.log(`checked ${checked} prose fields, ${failed} mismatched\n`);

// Anything long that still renders as a single paragraph is a wall of text.
const walls = rows.filter((r) => r.parts === 1 && r.chars > r.target * 1.35);
if (walls.length === 0) {
  console.log("no single-paragraph walls");
} else {
  console.log(`single-paragraph walls (${walls.length}):`);
  for (const w of walls.sort((a, b) => b.chars - a.chars)) {
    console.log(`  ${w.chars}c (target ${w.target})  ${w.entry}.${w.field}`);
  }
}

const dist = rows.reduce<Record<number, number>>((acc, r) => {
  acc[r.parts] = (acc[r.parts] ?? 0) + 1;
  return acc;
}, {});
console.log("\nparagraph counts:", JSON.stringify(dist));

process.exit(failed === 0 && walls.length === 0 ? 0 : 1);
