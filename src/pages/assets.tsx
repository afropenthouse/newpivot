import { Gauge, MapPin, Ship } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import heroRefinery from "@/assets/hero-refinery.jpg";
import industrialSupply from "@/assets/industrial-supply.jpg";
import storageTerminal from "@/assets/storage-terminal.jpg";
import supplyTrucks from "@/assets/supply-trucks.jpg";
import tanker from "@/assets/tanker.jpg";

const tanks = [
  {
    name: "Tank 1",
    tag: "PMS",
    capacity: "10,000,000 litres",
    image: storageTerminal,
  },
  {
    name: "Tank 2",
    tag: "AGO",
    capacity: "8,000,000 litres",
    image: industrialSupply,
  },
  {
    name: "Tank 3",
    tag: "PMS",
    capacity: "10,000,000 litres",
    image: supplyTrucks,
  },
];

export function Assets() {
  return (
    <>
      <PageHero
        eyebrow="Assets & Facilities"
        title="Storage infrastructure and marine capacity for dependable supply."
        subtitle="Pivot Integrated Energy's facilities support petroleum storage, loading, discharge and logistics across strategic markets."
        image={heroRefinery}
      />

      <section className="container-grid py-24">
        <div className="grid overflow-hidden rounded-lg border border-border bg-card shadow-lift lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <p className="label-caps text-primary-dark">Storage Tank - Location: Dubai</p>
            <h2 className="headline-lg mt-4">70,000 CBM capacity</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              A strategic storage tank positioned in Dubai to support international product
              sourcing, inventory management and trading partnerships.
            </p>
          </div>
          <img
            src={storageTerminal}
            alt="Large petroleum storage tanks"
            loading="lazy"
            width={1280}
            height={900}
            className="min-h-80 size-full object-cover"
          />
        </div>
      </section>

      <section className="bg-charcoal py-24 text-on-charcoal">
        <div className="container-grid">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="label-caps text-primary-container">Storage Tank - Location: Calabar</p>
              <h2 className="headline-lg mt-4">28,000,000 litres of storage capacity.</h2>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6">
              <p className="flex gap-3 text-sm leading-7 text-on-charcoal/75">
                <MapPin className="mt-1 size-5 shrink-0 text-primary-container" />
                Esuk Utan Industrial Layout, beside PPMC Depot, Calabar, Cross River State, Nigeria.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {tanks.map((tank) => (
              <article
                key={tank.name}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.055]"
              >
                <img
                  src={tank.image}
                  alt={`${tank.name} petroleum storage`}
                  loading="lazy"
                  width={1280}
                  height={900}
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-extrabold">{tank.name}</h3>
                    <span className="label-caps rounded-sm bg-primary px-3 py-2 text-primary-foreground">
                      {tank.tag}
                    </span>
                  </div>
                  <p className="mt-5 text-3xl font-extrabold text-primary-container">
                    {tank.capacity}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-grid py-24 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={tanker}
            alt="Oil tanker MT Yu Yi"
            loading="lazy"
            width={1280}
            height={900}
            className="aspect-4/3 w-full rounded-lg object-cover shadow-lift"
          />
          <div>
            <p className="label-caps text-primary-dark">Oil Tanker</p>
            <h2 className="headline-lg mt-4">MT YU YI</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Pivot&apos;s oil tanker asset strengthens our ability to move petroleum products with
              marine scale, schedule confidence and a tighter connection between international
              sourcing and local supply.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="panel p-5">
                <Ship className="size-5 text-primary-dark" />
                <p className="label-caps mt-4 text-muted-foreground">Asset</p>
                <p className="mt-1 font-display text-xl font-bold">Oil Tanker</p>
              </div>
              <div className="panel p-5">
                <Gauge className="size-5 text-primary-dark" />
                <p className="label-caps mt-4 text-muted-foreground">Function</p>
                <p className="mt-1 font-display text-xl font-bold">Marine Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
