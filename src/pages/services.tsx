import { Factory, Fuel, Plane, Ship, Truck } from "lucide-react";

import { Counter } from "@/components/site/Counter";
import { PageHero } from "@/components/site/PageHero";
import { ServiceCard } from "@/components/site/ServiceCard";
import aviation from "@/assets/aviation.jpg";
import heroRefinery from "@/assets/hero-refinery.jpg";
import industrialSupply from "@/assets/industrial-supply.jpg";
import retailStation from "@/assets/retail-station.jpg";
import tanker from "@/assets/tanker.jpg";

const services = [
  {
    image: tanker,
    icon: Ship,
    title: "Bulk Importation & Trading",
    body: "Bulk importation and trading constitute the foundational pillars of our business operations. We import Premium Motor Spirit (PMS), Automotive Gasoil (AGO), and Aviation Turbine Kerosene (ATK), each selected for its role in powering modern life.",
  },
  {
    image: retailStation,
    icon: Fuel,
    title: "Retail & Distribution",
    body: "We facilitate seamless access to products for bulk buyers and distributors nationwide, orchestrating terminal deliveries that support smooth freight operations to every corner of the country.",
  },
  {
    image: industrialSupply,
    icon: Factory,
    title: "Supply",
    body: "Pivot provides comprehensive energy solutions to financial institutions, manufacturing enterprises, construction firms, transportation companies, shipping operations and fast-moving consumer goods businesses.",
  },
  {
    image: aviation,
    icon: Plane,
    title: "Aviation",
    body: "We serve private and commercial aircraft operators with reliable aviation fuel solutions. Pivot has successfully facilitated the exchange of over 9 million litres of top-quality aviation fuel through direct market transactions and third-party sales.",
  },
];

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Energy solutions across importation, distribution, supply and aviation."
        subtitle="We serve public and private sector clients with refined petroleum products, logistics discipline and a customer-first operating model."
        image={heroRefinery}
      />

      <section className="container-grid py-24 lg:py-32">
        <div className="grid gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      <section className="bg-surface-container py-20">
        <div className="container-grid grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="label-caps text-primary-dark">Why Pivot</p>
            <h2 className="headline-lg mt-4">When our clients win, we win as well.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <Counter value="PMS" label="Premium Motor Spirit" />
            <Counter value="AGO" label="Automotive Gasoil" />
            <Counter value="ATK" label="Aviation Turbine Kerosene" />
          </div>
        </div>
        <div className="container-grid mt-12">
          <p className="max-w-4xl text-base leading-8 text-muted-foreground">
            We understand that our success is intrinsically linked to the success of our clients.
            Our team delivers tailored energy solutions aligned to each industrial partner&apos;s
            needs and objectives, supporting growth, continuity and sustainable development.
          </p>
        </div>
      </section>
    </>
  );
}
