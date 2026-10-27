import Link from "next/link";
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
          <Link className="text-link" href="/gallery">
            View the gallery <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="preview-grid">
          {[photos[3]!, photos[4]!, photos[8]!].map((p) => (
            <Link href="/gallery" key={p.src}>
              <img src={p.src} alt={p.alt} loading="lazy" />
              <span>
                {p.title}
                <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
