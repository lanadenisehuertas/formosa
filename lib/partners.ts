import { entries } from "@/data/entries";

export type AggregatedPartner = {
  name: string;
  url?: string;
  /** Entry names that reference this product or company. */
  usedBy: string[];
};

function aggregate(
  pick: (slug: string) => { name: string; url?: string }[]
): AggregatedPartner[] {
  const byName = new Map<string, AggregatedPartner>();

  for (const entry of entries) {
    for (const item of pick(entry.slug)) {
      const existing = byName.get(item.name);
      if (existing) {
        if (!existing.usedBy.includes(entry.name)) existing.usedBy.push(entry.name);
        if (!existing.url && item.url) existing.url = item.url;
      } else {
        byName.set(item.name, { name: item.name, url: item.url, usedBy: [entry.name] });
      }
    }
  }

  return [...byName.values()].sort((a, b) => a.name.localeCompare(b.name));
}

/** Award-listed Taiwan Excellence products referenced across the entries. */
export const taiwanProducts = aggregate(
  (slug) => entries.find((e) => e.slug === slug)?.products ?? []
);

/** Named companies and research institutes without a single award listing. */
export const taiwanCompanies = aggregate(
  (slug) => entries.find((e) => e.slug === slug)?.partners ?? []
);
