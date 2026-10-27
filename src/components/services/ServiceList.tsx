import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/company";

export function ServiceList() {
  return (
    <section className="container-grid section-space service-list">
      {services.map((s) => (
        <article key={s.title}>
          <img src={s.image} alt={s.title} loading="lazy" />
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
