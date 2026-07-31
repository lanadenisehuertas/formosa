import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Prose } from "@/components/Prose";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { entries, getEntry } from "@/data/entries";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return {
    title: entry.name,
    description: entry.tagline,
    openGraph: { title: entry.name, description: entry.tagline },
  };
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="briefBody">
      <h2 className="briefBodyLabel">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export default async function EntryBriefPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const index = entries.findIndex((e) => e.slug === entry.slug);
  const previous = index > 0 ? entries[index - 1] : null;
  const next = index < entries.length - 1 ? entries[index + 1] : null;
  const brief = entry.brief;

  return (
    <>
      <SiteHeader />

      <main className="shell">
        <Link href="/#entries" className="briefBack">
          <span aria-hidden="true">&larr;</span> All entries
        </Link>

        <header
          className="briefHead"
          style={{ ["--field" as string]: entry.accent }}
        >
          <span className="briefIndex">
            Entry {String(index + 1).padStart(2, "0")}
          </span>
          <h1 className="briefName">
            {entry.name}
            {entry.nameZh ? <span className="zh">{entry.nameZh}</span> : null}
          </h1>
          <p className="briefTagline">{entry.tagline}</p>

          <p className="briefProposalTitle">{entry.proposalTitle}</p>

          <ul className="briefTags">
            {entry.industries.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
            {entry.issues.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>

          {brief?.facts && brief.facts.length > 0 ? (
            <dl className="briefFacts">
              {brief.facts.map((fact) => (
                <div key={fact.label} className="briefFact">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
              {entry.proposalType ? (
                <div className="briefFact">
                  <dt>Proposal type</dt>
                  <dd>{entry.proposalType}</dd>
                </div>
              ) : null}
            </dl>
          ) : null}
        </header>

        <Section label="Problem">
          <Prose text={entry.problem} />
        </Section>

        <Section label="Core idea">
          <Prose text={entry.coreIdea} />
        </Section>

        {brief?.feasibility && brief.feasibility.length > 0 ? (
          <Section label="Why it's feasible">
            <ul className="numberedList">
              {brief.feasibility.map((item) => (
                <li key={item.slice(0, 40)}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {brief?.patentability && brief.patentability.length > 0 ? (
          <Section label="Why it's patentable">
            <ul className="numberedList">
              {brief.patentability.map((item) => (
                <li key={item.slice(0, 40)}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {brief?.situation ? (
          <Section label="Situation observed">
            <Prose text={brief.situation} />
          </Section>
        ) : null}

        {brief?.pest ? (
          <Section label="PEST analysis">
            <div className="pestGrid">
              {(
                [
                  ["Political", brief.pest.political],
                  ["Economic", brief.pest.economic],
                  ["Social", brief.pest.social],
                  ["Technological", brief.pest.technological],
                ] as const
              ).map(([heading, body]) => (
                <div key={heading} className="pestCell">
                  <h4>{heading}</h4>
                  <Prose text={body} className="pestProse" target={620} />
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        {brief?.tasks && brief.tasks.length > 0 ? (
          <Section label="Key tasks">
            <ul className="numberedList">
              {brief.tasks.map((task) => (
                <li key={task.slice(0, 40)}>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {brief?.businessModel ? (
          <Section label="Business model">
            <Prose text={brief.businessModel} />
          </Section>
        ) : null}

        <Section label="Taiwan integration">
          {brief?.taiwanSolutions ? <Prose text={brief.taiwanSolutions} /> : null}

          {entry.products.length > 0 ? (
            <ul className="productList" style={{ marginTop: "1.5rem" }}>
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
          ) : null}

          {entry.partners && entry.partners.length > 0 ? (
            <ul className="productList" style={{ marginTop: "1.5rem" }}>
              {entry.partners.map((partner) => (
                <li key={partner.name}>
                  <span className="productName">{partner.name}</span>
                  <small>{partner.role}</small>
                </li>
              ))}
            </ul>
          ) : null}
        </Section>

        {brief?.ecosystem ? (
          <Section label="Complementary ecosystem">
            <Prose text={brief.ecosystem} />
          </Section>
        ) : null}

        {brief?.outcomes ? (
          <Section label="Expected outcomes">
            <Prose text={brief.outcomes} />
          </Section>
        ) : null}

        {brief?.risks && brief.risks.length > 0 ? (
          <Section label="Risks and mitigation">
            <ul className="numberedList">
              {brief.risks.map((risk) => (
                <li key={risk.slice(0, 40)}>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {brief?.fundAllocation ? (
          <Section label="Fund allocation">
            <Prose text={brief.fundAllocation} />
          </Section>
        ) : null}

        {brief?.milestones && brief.milestones.length > 0 ? (
          <Section label="Milestones">
            <ul className="numberedList">
              {brief.milestones.map((milestone) => (
                <li key={milestone.slice(0, 40)}>
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        <nav className="briefNav" aria-label="Other entries">
          {previous ? (
            <Link
              className="briefNavLink"
              data-dir="previous"
              href={`/entries/${previous.slug}`}
            >
              <span>&larr; Previous entry</span>
              <strong>{previous.name}</strong>
            </Link>
          ) : null}
          {next ? (
            <Link
              className="briefNavLink"
              data-dir="next"
              href={`/entries/${next.slug}`}
            >
              <span>Next entry &rarr;</span>
              <strong>{next.name}</strong>
            </Link>
          ) : null}
        </nav>
      </main>

      <SiteFooter />
    </>
  );
}
