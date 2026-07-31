import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <div className="footerGrid">
          <div className="footerCol">
            <h3>Contact</h3>
            <ul>
              {site.team.map((member) => (
                <li key={member.name + member.role}>
                  {member.name} — {member.role}
                  {member.email ? (
                    <>
                      <br />
                      <a href={`mailto:${member.email}`}>{member.email}</a>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="footerCol">
            <h3>Affiliation</h3>
            <p>
              <a
                href={site.about.affiliation.url}
                target="_blank"
                rel="noreferrer"
              >
                {site.about.affiliation.organisation}
              </a>
              <br />
              {site.about.affiliation.location}
            </p>
          </div>

          <div className="footerCol">
            <h3>Competition</h3>
            <p>
              <a href={site.competition.url} target="_blank" rel="noreferrer">
                {site.competition.name}
              </a>
              <br />
              {site.competition.organiser}
              <br />
              Submissions close {site.competition.deadline}
            </p>
          </div>
        </div>

        <div className="footerBase">
          <p>{site.disclaimer}</p>
          <p>
            {site.name} · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
