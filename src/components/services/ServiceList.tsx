import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/company";

export function ServiceList() {
  return (
    <section className="container-grid section-space service-list">
      {services.map((s) => (
        <article key={s.title}>
          <div className={`service-images${s.images.length > 1 ? " service-images-pair" : ""}`}>
            {s.images.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
            ))}
          </div>
          <div>
            <p className="eyebrow">{s.tag}</p>
            <h2>{s.title}</h2>
            <p className="body-copy">{s.body}</p>
            <Link href="/contact" className="text-link">
              Discuss your requirements <ArrowUpRight size={18} />
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
