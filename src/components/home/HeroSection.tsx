import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate flex min-h-[clamp(38rem,calc(100svh-var(--site-header-height)),50rem)] flex-col bg-[#172027] text-white min-[851px]:min-h-[clamp(36rem,calc(100svh-var(--site-header-height)),65rem)]"
    >
      <img
        className="absolute inset-0 -z-20 size-full object-cover object-[58%_center] min-[851px]:object-[center_20%] min-[1920px]:object-[center_10%]"
        src="/new_pictures/home.jpeg"
        alt="Pivot Energy retail station in Nigeria"
        fetchPriority="high"
      />
      <div
        className="masthead-scrim pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <div className="masthead-container flex flex-1 flex-col justify-center py-[clamp(2rem,5svh,5rem)]">
        <p className="mb-[clamp(1rem,1.7vw,2rem)] flex items-center gap-2.5 text-[clamp(0.625rem,0.8vw,1rem)] font-bold tracking-[0.16em] text-[#ffb365]">
          <span className="size-1.5 shrink-0 bg-[#f28b22]" aria-hidden="true" />
          INTEGRATED ENERGY. LASTING IMPACT.
        </p>
        <h1
          id="home-hero-title"
          className="max-w-[68rem] text-[clamp(2.375rem,10vw,3.75rem)] leading-[1.07] font-bold tracking-[-0.055em] min-[851px]:text-[clamp(3.25rem,min(5.8vw,11.3svh),8rem)]"
        >
          Energy for today.
          <br />
          Tomorrow.
          <br />
          <span className="text-[#ffa344]">And the future.</span>
        </h1>
        <p className="mt-[clamp(1rem,1.65vw,2rem)] max-w-[min(100%,37ch)] text-[clamp(0.875rem,1.12vw,1.375rem)] leading-[1.65] text-[#e1e5e8]">
          Connecting global energy supply with everyday possibilities. Reliable petroleum trading,
          supply and distribution, rooted in Africa.
        </p>
        <div className="mt-[clamp(1.25rem,1.8vw,2rem)] flex flex-col items-start gap-4 min-[561px]:flex-row min-[561px]:items-center min-[561px]:gap-7">
          <a className="action-button" href="/services">
            Explore our solutions <ArrowUpRight size={18} />
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-3 text-[clamp(0.875rem,0.95vw,1rem)]"
            href="/about"
          >
            Discover Pivot <ArrowRight size={17} />
          </a>
        </div>
      </div>
      <div className="masthead-container flex items-center justify-between gap-3 py-[clamp(0.75rem,1.3vw,1.5rem)] text-[clamp(0.5625rem,0.58vw,0.75rem)] tracking-[0.15em] text-[#d6d9da]">
        <span>GLOBAL REACH. LOCAL UNDERSTANDING.</span>
        <a
          className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30"
          href="#introduction"
          aria-label="Explore the page"
        >
          <ArrowDown size={18} />
        </a>
        <span className="hidden min-[561px]:inline">EST. 2017 — NIGERIA</span>
      </div>
    </section>
  );
}
