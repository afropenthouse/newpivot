import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function CompanyIntroduction() {
  return (
    <section id="introduction" className="container-grid section-space intro-grid">
      <div className="intro-image">
        <img src="/images/service.webp" alt="A Pivot attendant helping a customer" loading="lazy" />
        <div className="image-note">
          <ShieldCheck size={25} />
          <span>
            Built on trust.
            <br />
            <strong>Driven by people.</strong>
          </span>
        </div>
      </div>
      <div>
        <p className="eyebrow">THIS IS PIVOT</p>
        <h2>
          A world of energy.
          <br />A personal commitment.
        </h2>
        <p className="body-copy">
          We are an indigenous energy company with a simple purpose: to make quality energy
          accessible, dependable and valuable to the people who rely on it.
        </p>
        <p className="body-copy">
          Established in 2017, Pivot operates across the downstream petroleum value chain. From
          international trading to the service at our pumps, we connect expertise, infrastructure
          and people to keep businesses and communities moving.
        </p>
        <Link className="text-link" href="/about">
          Get to know us <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
