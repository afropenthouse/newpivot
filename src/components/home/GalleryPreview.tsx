import { ArrowUpRight } from "lucide-react";
import { photos } from "@/lib/company";

export function GalleryPreview() {
  return (
    <section className="gallery-preview section-space">
      <div className="container-grid">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PIVOT IN PICTURES</p>
            <h2>Our everyday. Your energy.</h2>
          </div>
          <a className="text-link" href="/gallery">
            View the gallery <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="preview-grid">
          {[photos[3]!, photos[4]!, photos[8]!].map((p) => (
            <a href="/gallery" key={p.src}>
              <img src={p.src} alt={p.alt} loading="lazy" />
              <span>
                {p.title}
                <ArrowUpRight size={18} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
