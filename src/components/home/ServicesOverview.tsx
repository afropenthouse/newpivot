import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/company";

export function ServicesOverview() {
  return (
    <section className="solutions-section section-space">
      <div className="container-grid">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>
              One connected business.
              <br />
              Energy at every step.
            </h2>
          </div>
          <a className="text-link" href="/services">
            All our services <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="solution-grid">
          {services.map((s) => (
            <a href="/services" key={s.title} className="solution-card">
              <div
                className={`solution-image${s.images.length > 1 ? " solution-image-pair" : ""}${s.imageAlignment === "left" ? " photo-pair-left" : ""}`}
              >
                {s.images.map((image) => (
                  <img key={image.src} src={image.src} alt="" loading="lazy" />
                ))}
                <span>
                  <ArrowUpRight size={23} />
                </span>
              </div>
              <p className="eyebrow">{s.tag}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
