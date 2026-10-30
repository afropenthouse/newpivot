import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="home-hero">
      <img
        className="hero-photo"
        src="/new_pictures/home.jpeg"
        alt="Pivot Energy retail station in Nigeria"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="container-grid hero-content">
        <p className="eyebrow light">
          <span /> INTEGRATED ENERGY. LASTING IMPACT.
        </p>
        <h1>
          Energy for today.
          <br />
          Tomorrow.
          <br />
          <em>And the future.</em>
        </h1>
        <p className="hero-description">
          Connecting global energy supply with everyday possibilities. Reliable petroleum trading,
          supply and distribution, rooted in Africa.
        </p>
        <div className="hero-actions">
          <Link className="action-button" href="/services">
            Explore our solutions <ArrowUpRight size={18} />
          </Link>
          <Link className="hero-link" href="/about">
            Discover Pivot <ArrowRight size={17} />
          </Link>
        </div>
      </div>
      <div className="container-grid hero-bottom">
        <span>GLOBAL REACH. LOCAL UNDERSTANDING.</span>
        <a href="#introduction" aria-label="Explore the page">
          <ArrowDown size={18} />
        </a>
        <span>EST. 2017 — NIGERIA</span>
      </div>
    </section>
  );
}
