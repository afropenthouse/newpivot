import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Fuel,
  Plane,
  Route,
  ShieldCheck,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";

import { Counter } from "@/components/site/Counter";
import { ServiceCard } from "@/components/site/ServiceCard";
import aviation from "@/assets/aviation.jpg";
import heroRefinery from "@/assets/hero-refinery.jpg";
import retailStation from "@/assets/retail-station.jpg";
import storageTerminal from "@/assets/storage-terminal.jpg";
import supplyTrucks from "@/assets/supply-trucks.jpg";
import tanker from "@/assets/tanker.jpg";
import { AboutIntroSection } from "@/components/site/AboutIntroSection";
import { AreasOfOperationSection } from "@/components/site/AreasOfOperationSection";
import { ClientsSection } from "@/components/site/ClientsSection";
import { HeroSection } from "@/components/site/HeroSection";
import { ProductsSection } from "@/components/site/ProductsSection";
import { StatsSection } from "@/components/site/StatsSection";
import { ValueChainSection } from "@/components/site/ValueChainSection";
import { WhyItMattersSection } from "@/components/site/WhyItMattersSection";

export interface AreaItem {
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}

export interface ValueChainItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}

const areas: AreaItem[] = [
  {
    image: tanker,
    icon: Ship,
    title: "Bulk Importation & Trading",
    body: "Our core business is the importation of refined petroleum products including Premium Motor Spirit (PMS), Automotive Gasoil (AGO) and Aviation Turbine Kerosene (ATK).",
  },
  {
    image: retailStation,
    icon: Fuel,
    title: "Retail & Distribution",
    body: "We serve bulk buyers and distributors with terminal delivery designed for easy freight movement to every part of the country.",
  },
  {
    image: supplyTrucks,
    icon: Truck,
    title: "Industrial Supply",
    body: "We provide energy solutions to financial institutions, manufacturing, construction, transportation, shipping and FMCG clients.",
  },
  {
    image: aviation,
    icon: Plane,
    title: "Aviation",
    body: "We support private and commercial aircraft operators with reliable aviation fuel solutions and a track record of over 9 million litres traded.",
  },
];

const clientLogos = [
  { name: "Mobil", src: "/Mobil-logo.png" },
  { name: "Sahara Group", src: "/sahara.png" },
  { name: "Sinoma", src: "/sinoma.jpg" },
  { name: "Oriental Hotels", src: "/oriental.jpg" },
  { name: "Shema Petroleum", src: "/shema.jpg" },
  { name: "Eko Hotels", src: "/eko.jpg" },
  { name: "African Terminals", src: "/Africa-Terminals-Logo.png" },
  { name: "A.A. Rano", src: "/aarano-logo.png" },
  { name: "Integrated Oil and Gas", src: "/integrated_logo.png" },
];

const partnerLogos = [
  { name: "Mercuria", src: "/mercuria.png" },
  { name: "Mocoh", src: "/mocoh.png" },
  { name: "Nimex", src: "/nimex.jpg" },
  { name: "Prax", src: "/prax.jpg" },
  { name: "Total", src: "/total.png" },
  { name: "Trafigura", src: "/trafigura.png" },
  { name: "Vitol", src: "/vitol.png" },
];

const valueChain: ValueChainItem[] = [
  {
    icon: Ship,
    title: "Import",
    body: "Global sourcing and petroleum trading anchored by experienced refiners and trading houses.",
  },
  {
    icon: Warehouse,
    title: "Store",
    body: "Strategic storage across Dubai and Calabar to keep product movement dependable.",
  },
  {
    icon: Route,
    title: "Move",
    body: "Terminal delivery and freight coordination for distributors and industrial buyers.",
  },
  {
    icon: ShieldCheck,
    title: "Supply",
    body: "Quality refined products delivered for homes, businesses, industries and aviation.",
  },
];

export function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutIntroSection />
      <AreasOfOperationSection areas={areas} />
      <ValueChainSection items={valueChain} />
      <ProductsSection />
      <ClientsSection clientLogos={clientLogos} partnerLogos={partnerLogos} />
      <WhyItMattersSection />
    </>
  );
}
