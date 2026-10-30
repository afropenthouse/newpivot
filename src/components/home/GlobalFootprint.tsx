import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";

export function GlobalFootprint() {
  return (
    <section className="container-grid section-space footprint">
      <div>
        <p className="eyebrow">AFRICAN ROOTS. INTERNATIONAL REACH.</p>
        <h2>
          Closer to the markets
          <br />
          that matter.
        </h2>
        <p className="body-copy">
          With our operational base in West Africa and international trade operations in London,
          Ghana, Tanzania and Dubai, we connect global supply with local demand.
        </p>
        <Link href="/assets" className="text-link">
          Explore our infrastructure <ArrowUpRight size={18} />
        </Link>
        <div className="market-list">
          <Globe2 size={22} />
          <span>Nigeria · Ghana · United Kingdom · Tanzania · U.A.E.</span>
        </div>
      </div>
      <div className="infrastructure-panel">
        <span className="eyebrow light">STRATEGIC STORAGE CAPACITY</span>
        {[
          ["Lagos", "~60,000 MT"],
          ["Calabar", "~30,000 MT"],
          ["Onne", "~10,000 MT"],
          ["Sharjah, U.A.E.", "70,000 CBM"],
        ].map(([place, value]) => (
          <div key={place}>
            <span>{place}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
