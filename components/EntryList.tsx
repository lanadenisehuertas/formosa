"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Prose } from "@/components/Prose";
import type { Entry } from "@/data/entries";
import { industries as allIndustries } from "@/data/site";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function EntryCard({ entry, index }: { entry: Entry; index: number }) {
  const [open, setOpen] = useState(false);
  const detailId = `detail-${entry.slug}`;

  return (
    // --field drives the card's tint, its offset shadow and the detail labels.
    <article className="card" style={{ ["--field" as string]: entry.accent }}>
      <div className="cardField">
        <span className="cardIndex">Entry {pad(index)}</span>
        <h3 className="cardName">
          {entry.name}
          {entry.nameZh ? <span className="cardNameZh">{entry.nameZh}</span> : null}
        </h3>
      </div>

      <div className="cardBody">
        <p className="cardTagline">{entry.tagline}</p>

        <ul className="tagRow">
          {entry.industries.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        {entry.products.length > 0 ? (
          <ul className="tagRow">
            {entry.products.slice(0, 2).map((product) => (
              <li key={product.name} className="tag" data-kind="product">
                {product.name}
              </li>
            ))}
            {entry.products.length > 2 ? (
              <li className="tag" data-kind="product">
                +{entry.products.length - 2} more
              </li>
            ) : null}
          </ul>
        ) : null}

        <button
          type="button"
          className="cardToggle"
          aria-expanded={open}
          aria-controls={detailId}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? "Close" : "Read the concept"}</span>
          <span className="cardToggleIcon" aria-hidden="true" />
        </button>

        <div className="cardReveal" data-open={open} id={detailId}>
          <div className="cardRevealInner">
            <div className="cardDetail" hidden={!open}>
              <div className="detailBlock">
                <h4>Problem</h4>
                <Prose text={entry.problem} className="detailProse" target={400} />
              </div>

              <div className="detailBlock">
                <h4>Core idea</h4>
                <Prose text={entry.coreIdea} className="detailProse" target={400} />
              </div>

              <div className="detailBlock">
                <h4>Issue categories</h4>
                <ul className="tagRow">
                  {entry.issues.map((issue) => (
                    <li key={issue} className="tag">
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>

              {entry.products.length > 0 ? (
                <div className="detailBlock">
                  <h4>Taiwan products integrated</h4>
                  <ul className="productList">
                    {entry.products.map((product) => (
                      <li key={product.name}>
                        {product.url ? (
                          <a href={product.url} target="_blank" rel="noreferrer">
                            {product.name}
                          </a>
                        ) : (
                          <span className="productName">{product.name}</span>
                        )}
                        {product.role ? <small>{product.role}</small> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {entry.partners && entry.partners.length > 0 ? (
                <div className="detailBlock">
                  <h4>Manufacturing and research partners</h4>
                  <ul className="productList">
                    {entry.partners.map((partner) => (
                      <li key={partner.name}>
                        <span className="productName">{partner.name}</span>
                        <small>{partner.role}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <Link className="briefLink" href={`/entries/${entry.slug}`}>
                Read the full brief
                <span className="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function EntryList({ entries }: { entries: Entry[] }) {
  const [filter, setFilter] = useState<string | null>(null);

  const available = useMemo(
    () => allIndustries.filter((i) => entries.some((e) => e.industries.includes(i))),
    [entries]
  );

  const visible = useMemo(
    () => (filter ? entries.filter((e) => e.industries.includes(filter)) : entries),
    [entries, filter]
  );

  return (
    <>
      <div className="filterBar">
        <span className="filterLabel">Filter</span>
        <button
          type="button"
          className="filterChip"
          aria-pressed={filter === null}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {available.map((industry) => (
          <button
            key={industry}
            type="button"
            className="filterChip"
            aria-pressed={filter === industry}
            onClick={() => setFilter(filter === industry ? null : industry)}
          >
            {industry}
          </button>
        ))}
        <span className="filterCount" aria-live="polite">
          {visible.length} of {entries.length}
        </span>
      </div>

      {visible.length > 0 ? (
        <div className="entryGrid">
          {visible.map((entry) => (
            <EntryCard
              key={entry.slug}
              entry={entry}
              index={entries.indexOf(entry) + 1}
            />
          ))}
        </div>
      ) : (
        <p className="emptyNote">No entries in this category.</p>
      )}
    </>
  );
}
