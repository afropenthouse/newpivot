import { ArrowRight, BadgeCheck, Fuel } from "lucide-react";
import { Link } from "react-router-dom";

import heroRefinery from "@/assets/hero-refinery.jpg";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal">
      <img
        src={heroRefinery}
        alt="Refinery complex illuminated at dusk"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/86 to-charcoal/20" />
      <div className="industrial-grid absolute inset-0 opacity-60" />
      <div className="container-grid relative flex min-h-[22rem] items-center py-10 lg:py-14">
        <div>
          <p className="label-caps text-primary-container">
            Oil and gas solutions across Sub-Saharan Africa
          </p>
          <h1 className="display-lg mt-6 max-w-4xl text-on-charcoal">
            Leading Energy Solutions Provider in Sub-Saharan Africa
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-on-charcoal/78">
            Providing affordable and quality energy solutions to public and private sector customers
            across Nigeria&apos;s downstream market and Africa at large.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/services" className="btn-primary">
              Explore Services <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="btn-outline text-on-charcoal">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
