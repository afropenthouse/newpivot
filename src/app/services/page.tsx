import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ServiceList } from "@/components/services/ServiceList";
import { ProductsSection } from "@/components/services/ProductsSection";

export const metadata: Metadata = {
  title: "Our services",
  description:
    "Petroleum products trading, supply, distribution, logistics and storage for Gasoline, Gasoil and Base Oils.",
  openGraph: {
    title: "Our services",
    description:
      "Petroleum products trading, supply, distribution, logistics and storage for Gasoline, Gasoil and Base Oils.",
  },
  twitter: {
    title: "Our services",
    description:
      "Petroleum products trading, supply, distribution, logistics and storage for Gasoline, Gasoil and Base Oils.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Connected solutions. Dependable energy."
        subtitle="From international markets to everyday needs, we work across the downstream petroleum value chain."
        image="/images/diesel.webp"
      />
      <ServiceList />
      <ProductsSection />
    </main>
  );
}
