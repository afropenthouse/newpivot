import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PeopleBanner() {
  return (
    <section className="people-banner">
      <img src="/images/team.webp" alt="The Pivot Energy team" loading="lazy" />
      <div />
      <div className="container-grid">
        <p className="eyebrow light">THE HUMAN SIDE OF ENERGY</p>
        <h2>
          Good energy starts
          <br />
          with great people.
        </h2>
        <Link href="/gallery" className="action-button">
          Life at Pivot <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
