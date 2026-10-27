import { ArrowDownToLine } from "lucide-react";
import { profileUrl } from "@/lib/company";

export function CompanyStory() {
  return (
    <section className="container-grid section-space intro-grid">
      <div>
        <p className="eyebrow">OUR STORY</p>
        <h2>
          Built to move
          <br />
          energy forward.
        </h2>
        <p className="body-copy">
          Pivot Integrated Energy is an indigenous oil and gas company established in 2017, focused
          on the trading, supply, distribution and logistics of refined petroleum products across
          global markets.
        </p>
        <p className="body-copy">
          Our operational base is in West Africa, with international trade operations in London,
          Ghana, Tanzania and Dubai. We supply Gasoline, Gasoil and Base Oils to a diverse client
          base, connecting global relationships with local understanding.
        </p>
        <p className="body-copy">
          Strong corporate governance, disciplined financial management and operational excellence
          guide our business. Long-standing relationships with global trading partners help us
          deliver reliable and efficient energy solutions.
        </p>
        <a href={profileUrl} download className="text-link">
          Read our 2026 profile <ArrowDownToLine size={18} />
        </a>
      </div>
      <img
        className="about-photo"
        src="/images/team-station.webp"
        alt="Pivot retail colleagues together at the station"
        loading="lazy"
      />
    </section>
  );
}
