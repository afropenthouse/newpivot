import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { CompanyStats } from "@/components/home/CompanyStats";
import { CompanyIntroduction } from "@/components/home/CompanyIntroduction";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProductPortfolio } from "@/components/home/ProductPortfolio";
import { GlobalFootprint } from "@/components/home/GlobalFootprint";
import { PeopleBanner } from "@/components/home/PeopleBanner";
import { TradingPartners } from "@/components/home/TradingPartners";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ProfileDownload } from "@/components/home/ProfileDownload";

export const metadata: Metadata = {
  title: "Energy for today, tomorrow & the future",
  description:
    "Pivot Integrated Energy delivers petroleum trading, supply, distribution and storage solutions. African roots. International reach.",
  openGraph: {
    title: "Energy for today, tomorrow & the future",
    description:
      "Pivot Integrated Energy delivers petroleum trading, supply, distribution and storage solutions. African roots. International reach.",
  },
  twitter: {
    title: "Energy for today, tomorrow & the future",
    description:
      "Pivot Integrated Energy delivers petroleum trading, supply, distribution and storage solutions. African roots. International reach.",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CompanyStats />
      <CompanyIntroduction />
      <ServicesOverview />
      <ProductPortfolio />
      <GlobalFootprint />
      <PeopleBanner />
      <TradingPartners />
      <GalleryPreview />
      <ProfileDownload />
    </main>
  );
}
