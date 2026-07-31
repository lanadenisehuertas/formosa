import { EntryList } from "@/components/EntryList";
import { Marquee } from "@/components/Marquee";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Blob, Sparkle, Squiggle } from "@/components/Stickers";
import { Wave } from "@/components/Wave";
import { entries } from "@/data/entries";
import { site } from "@/data/site";
import { taiwanCompanies, taiwanProducts } from "@/lib/partners";

const PAPER = "#fbf6ea";
const VIOLET = "#4b3fd4";
const LILAC = "#ded5fb";
const INK = "#16142a";

export default function HomePage() {
  const industriesCovered = new Set(entries.flatMap((e) => e.industries));

  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero">
          <Sparkle className="sticker heroSparkle" color="#f5399b" />
          <Squiggle className="sticker heroSquiggle" color="#4b3fd4" />

          <div className="shell heroInner">
            <p className="heroKicker">
              <span className="dot" aria-hidden="true" />
              {site.competition.name}
            </p>

            <h1 className="heroTitle">
              <span className="serif">Seven concepts</span>{" "}
              <span className="quiet serif">built on</span>{" "}
              <span className="mark">
                <span className="grotesk">Taiwan’s</span>
              </span>{" "}
              <span className="serif">supply chain.</span>
            </h1>

            <div className="heroFoot">
              <div>
                <p>{site.framing}</p>
                <div className="heroActions">
                  <a className="pill" href="#entries">
                    See the entries
                    <span className="arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>

              <div className="heroCount">
                <strong>{entries.length}</strong>
                entries · {industriesCovered.size} industries
              </div>
            </div>
          </div>
        </section>

        <Wave top={PAPER} bottom={VIOLET} />
        <Marquee />

        <section className="section sectionViolet" id="about">
          <Blob className="sticker aboutBlob" color="#d6f24e" />
          <div className="shell">
            <p className="sectionLabel">About the studio</p>
            <div className="aboutGrid">
              <div>
                <h2 className="sectionTitle">
                  Health innovation,{" "}
                  <span className="mark" data-tone="sky">
                    engineered
                  </span>{" "}
                  with Taiwan.
                </h2>
              </div>
              <div>
                <div className="aboutBody">
                  <p className="first">{site.about.lead}</p>
                  {site.about.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>

                <dl className="factRail">
                  <div className="factRow">
                    <dt>Organisation</dt>
                    <dd>
                      <a
                        href={site.about.affiliation.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {site.about.affiliation.organisation}
                      </a>
                    </dd>
                  </div>
                  <div className="factRow">
                    <dt>Based in</dt>
                    <dd>{site.about.affiliation.location}</dd>
                  </div>
                  <div className="factRow">
                    <dt>Taiwan products referenced</dt>
                    <dd>{taiwanProducts.length}</dd>
                  </div>
                  <div className="factRow">
                    <dt>Partners named</dt>
                    <dd>{taiwanCompanies.length}</dd>
                  </div>
                </dl>

                <aside className="noteCard">
                  <Sparkle className="sticker noteSparkle" color="#f5399b" />
                  <p className="noteLabel">{site.about.note.label}</p>
                  <p className="noteTerm">
                    {site.about.note.term}
                    <span className="noteMeaning">
                      “{site.about.note.meaning}”
                    </span>
                  </p>
                  <p className="noteBody">{site.about.note.body}</p>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <Wave top={VIOLET} bottom={PAPER} flip />

        <section className="section sectionPaper" id="entries">
          <div className="shell">
            <p className="sectionLabel">The entries</p>
            <h2 className="sectionTitle" style={{ marginBottom: "2.25rem" }}>
              Each one starts from a component that{" "}
              <span className="mark" data-tone="pink">
                already exists.
              </span>
            </h2>
            <EntryList entries={entries} />
          </div>
        </section>

        <Wave top={PAPER} bottom={LILAC} />

        <section className="section sectionLilac" id="partners">
          <div className="shell">
            <p className="sectionLabel">Taiwan partners</p>
            <h2 className="sectionTitle" style={{ marginBottom: "2.25rem" }}>
              Every product and partner these seven concepts depend on.
            </h2>

            <div className="partnerColumns">
              <div className="partnerCard">
                <p className="partnerHead">
                  Taiwan Excellence products ({taiwanProducts.length})
                </p>
                <ul>
                  {taiwanProducts.map((product) => (
                    <li key={product.name} className="partnerRow">
                      {product.url ? (
                        <a href={product.url} target="_blank" rel="noreferrer">
                          {product.name}
                        </a>
                      ) : (
                        <span>{product.name}</span>
                      )}
                      <span className="partnerUsedBy">
                        {product.usedBy.join(" · ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="partnerCard">
                <p className="partnerHead">
                  Manufacturers and institutes ({taiwanCompanies.length})
                </p>
                <ul>
                  {taiwanCompanies.map((company) => (
                    <li key={company.name} className="partnerRow">
                      <span>{company.name}</span>
                      <span className="partnerUsedBy">
                        {company.usedBy.join(" · ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Wave top={LILAC} bottom={INK} flip />
      </main>

      <SiteFooter />
    </>
  );
}
