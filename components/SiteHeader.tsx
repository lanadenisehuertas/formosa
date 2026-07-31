import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="shell headerInner">
        <Wordmark />
        <nav className="nav" aria-label="Sections">
          <a href="/#entries">Entries</a>
          <a href="/#partners" data-optional="true">
            Taiwan partners
          </a>
          <a href="/#about">About</a>
        </nav>
      </div>
    </header>
  );
}
