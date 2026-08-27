import { BadgeCheck } from "lucide-react";

import tanker from "@/assets/tanker.jpg";

const points = [
  "Strategic partnerships with reputable trading companies and refiners.",
  "Inventory support through storage facilities and marine movement.",
  "Customer-specific energy solutions for industrial and commercial sectors.",
  "A growth path focused on Sub-Saharan markets and regulatory quality.",
];

export function WhyItMattersSection() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-24 text-on-charcoal">
      <img
        src={tanker}
        alt="Energy tanker vessel"
        loading="lazy"
        width={1280}
        height={900}
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/90 to-charcoal/58" />
      <div className="container-grid relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="label-caps text-primary-container">Why it matters</p>
          <h2 className="headline-lg mt-4">Reliability you can feel before the trucks move.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
              <BadgeCheck className="size-5 text-primary-container" />
              <p className="mt-4 text-sm leading-7 text-on-charcoal/72">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
