import { ServiceCard } from "@/components/site/ServiceCard";

import { AreaItem } from "@/pages";

export function AreasOfOperationSection({ areas }: { areas: AreaItem[] }) {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="container-grid">
        <div className="max-w-2xl">
          <p className="label-caps text-on-charcoal">Our Areas of Operation</p>
          <h2 className="headline-lg mt-4 text-on-charcoal">
            Built across the downstream energy value chain.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {areas.map((a) => (
            <ServiceCard key={a.title} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}
