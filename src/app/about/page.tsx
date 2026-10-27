import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { PurposeSection } from "@/components/about/PurposeSection";
import { CoreValues } from "@/components/about/CoreValues";
import { LeadershipTeam } from "@/components/about/LeadershipTeam";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Meet Pivot Integrated Energy: our story since 2017, our purpose, values and leadership.",
  openGraph: {
    title: "About us",
    description:
      "Meet Pivot Integrated Energy: our story since 2017, our purpose, values and leadership.",
  },
  twitter: {
    title: "About us",
    description:
      "Meet Pivot Integrated Energy: our story since 2017, our purpose, values and leadership.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="ABOUT PIVOT"
        title="Global perspective. African ambition."
        subtitle="An indigenous energy business connecting people, products and possibilities since 2017."
        image="/images/team.webp"
      />
      <CompanyStory />
      <PurposeSection />
      <CoreValues />
      <LeadershipTeam />
    </main>
  );
}
