/**
 * Hits every outbound Taiwan Excellence link and reports its status.
 * Run with `npm run check:links` (needs network access).
 */
import { entries } from "../data/entries";

const urls = new Map<string, string[]>();

for (const entry of entries) {
  for (const product of entry.products) {
    if (!product.url) continue;
    const seen = urls.get(product.url) ?? [];
    seen.push(`${entry.slug}: ${product.name}`);
    urls.set(product.url, seen);
  }
}

async function main() {
  const results: { url: string; status: string; used: string[] }[] = [];

  for (const [url, used] of urls) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      results.push({ url, status: String(res.status), used });
    } catch (error) {
      results.push({ url, status: `ERROR ${(error as Error).message}`, used });
    }
  }

  const bad = results.filter((r) => r.status !== "200");

  for (const r of results.sort((a, b) => a.url.localeCompare(b.url))) {
    console.log(`${r.status.padEnd(6)} ${r.url}`);
    if (r.status !== "200") {
      for (const u of r.used) console.log(`       used by ${u}`);
    }
  }

  console.log(`\n${results.length} unique links, ${bad.length} not returning 200`);
  process.exit(bad.length === 0 ? 0 : 1);
}

main();
