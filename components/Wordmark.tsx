import Link from "next/link";
import { site } from "@/data/site";

export function Wordmark({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="wordmark" aria-label={`${site.name} — home`}>
      <span className="wordmarkSerif">{site.wordmark.serif}</span>
      <span className="wordmarkRule" aria-hidden="true" />
      <span className="wordmarkMono">{site.wordmark.mono}</span>
    </Link>
  );
}
