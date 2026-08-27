import { BadgeCheck } from "lucide-react";

import storageTerminal from "@/assets/storage-terminal.jpg";

export function AboutIntroSection() {
  return (
    <section className="container-grid grid items-center gap-14 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:py-32">
      <div className="relative">
        <img
          src={storageTerminal}
          alt="Petroleum storage tank farm"
          loading="lazy"
          width={1280}
          height={900}
          className="aspect-4/3 w-full rounded-lg object-cover shadow-lift"
        />
        <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-charcoal/92 p-5 text-on-charcoal shadow-lift backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <BadgeCheck className="mt-1 size-5 text-primary-container" />
            <div>
              <p className="font-display font-bold">Fully integrated operations</p>
              <p className="mt-1 text-xs leading-5 text-on-charcoal/68">
                Product sourcing, trading, logistics, distribution and storage under one disciplined
                value chain.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="label-caps flex items-center gap-3 text-primary-dark">
          <span className="h-px w-10 bg-primary" /> Pivot Integrated Energy Services Ltd.
        </p>
        <h2 className="headline-lg mt-5">Affordable, reliable energy for the markets we serve.</h2>
        <p className="mt-6 text-base leading-8 text-muted-foreground">
          Pivot Energy and Integrated Services Limited is a dynamic and forward-thinking indigenous
          oil and gas company founded in 2017. Our primary focus revolves around the trading,
          importation and distribution of pristine petroleum products within the vibrant Nigerian
          downstream market and Africa at large.
        </p>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          We serve a diverse clientele, from individual retail consumers to industrial giants,
          tailoring our offering to meet the unique needs of each sector while maintaining quality,
          cost-efficiency and reliability.
        </p>
      </div>
    </section>
  );
}
