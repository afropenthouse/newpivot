import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { StorageFacilities } from "@/components/assets/StorageFacilities";
import { MarineOperations } from "@/components/assets/MarineOperations";
import { LoadingOperations } from "@/components/assets/LoadingOperations";

export const metadata: Metadata = {
  title: "Infrastructure & operations",
  description: "Explore Pivot’s strategic storage capabilities and marine and trading operations.",
  openGraph: {
    title: "Infrastructure & operations",
    description:
      "Explore Pivot’s strategic storage capabilities and marine and trading operations.",
  },
  twitter: {
    title: "Infrastructure & operations",
    description:
      "Explore Pivot’s strategic storage capabilities and marine and trading operations.",
  },
};

export default function AssetsPage() {
  return (
    <main>
      <PageHero
        eyebrow="INFRASTRUCTURE & OPERATIONS"
        title="The capacity to keep energy moving."
        subtitle="Strategically located storage and experienced marine operations support a dependable supply network."
        image="/images/canopy.webp"
      />
      <StorageFacilities />
      <MarineOperations />
      <LoadingOperations />
    </main>
  );
}
