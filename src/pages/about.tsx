import {
  Award,
  Compass,
  Flag,
  Handshake,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";

import { Counter } from "@/components/site/Counter";
import { PageHero } from "@/components/site/PageHero";
import heroRefinery from "@/assets/hero-refinery.jpg";
import teamEngineers from "@/assets/team-engineers.jpg";

const values = [
  { icon: ShieldCheck, title: "Accountability" },
  { icon: Award, title: "Integrity" },
  { icon: Handshake, title: "Honesty" },
  { icon: Target, title: "Impact" },
  { icon: Lightbulb, title: "Innovation" },
  { icon: HeartHandshake, title: "Service" },
  { icon: Compass, title: "Quality" },
];

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A forward-thinking indigenous oil and gas company."
        subtitle="Founded in 2017, Pivot Integrated Energy Services Ltd is focused on trading, importation and distribution of refined petroleum products in Nigeria and across Africa."
        image={heroRefinery}
      />

      <section className="container-grid grid items-center gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div>
          <p className="label-caps text-primary-dark">Who we are</p>
          <h2 className="headline-lg mt-4">
            Fully integrated energy operations, built for reliability.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Pivot Energy and Integrated Services Limited is a dynamic and forward-thinking
              indigenous oil and gas company that was founded in 2017. Our primary focus revolves
              around the trading, importation, and distribution of pristine petroleum products
              within the vibrant and ever-evolving Nigerian downstream market and Africa at large.
            </p>
            <p>
              Our commitment extends to serving a diverse clientele, ranging from individual retail
              consumers to industrial giants, as we tailor our offerings to meet the unique needs of
              each sector.
            </p>
            <p>
              We pride ourselves on fully integrated business operations that span the entire value
              chain. This approach allows us to manage every aspect of our services, from product
              sourcing to distribution and beyond, ensuring efficiency, reliability, and customer
              satisfaction at every step.
            </p>
            <p>
              Our dedication to quality and excellence is evident in our strategic partnerships with
              reputable trading companies and seasoned refiners, empowering us to provide a diverse
              portfolio of high-quality petroleum products while maintaining cost-efficiency and
              reliability.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={teamEngineers}
            alt="Pivot Energy engineers reviewing plans on site"
            loading="lazy"
            width={1280}
            height={900}
            className="aspect-4/3 w-full rounded-lg object-cover shadow-lift"
          />
          <div className="absolute -bottom-8 left-6 right-6 rounded-lg bg-card p-6 shadow-lift">
            <div className="grid grid-cols-2 gap-6">
              <Counter value="2017" label="Year founded" />
              <Counter value="Africa" label="Market focus" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-on-charcoal">
        <div className="container-grid grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-8">
            <h3 className="headline-md flex items-center gap-3">
              <Flag className="size-5 text-primary-container" /> Our Mission
            </h3>
            <p className="mt-5 text-base leading-8 text-on-charcoal/74">
              To provide affordable and quality energy solutions making life better and putting
              smiles on the faces in every home on the continent.
            </p>
          </div>
          <div className="rounded-lg bg-primary p-8 text-primary-foreground">
            <h3 className="headline-md flex items-center gap-3">
              <Compass className="size-5" /> Our Vision
            </h3>
            <p className="mt-5 text-base leading-8 opacity-90">
              To be the biggest energy solutions provider in Sub-Saharan Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="container-grid py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="label-caps text-primary-dark">Our Core Values</p>
          <h2 className="headline-lg mt-4">The standards behind every delivery.</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="panel p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-sm bg-accent text-primary-dark">
                <v.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{v.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
