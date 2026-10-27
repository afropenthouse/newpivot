import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
export const metadata: Metadata = {
  title: "Gallery",
  description: "Meet the people and explore the stations behind Pivot Integrated Energy.",
  openGraph: {
    title: "Gallery",
    description: "Meet the people and explore the stations behind Pivot Integrated Energy.",
  },
  twitter: {
    title: "Gallery",
    description: "Meet the people and explore the stations behind Pivot Integrated Energy.",
  },
};
export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="OUR GALLERY"
        title="Real people. Everyday energy."
        subtitle="A closer look at the stations, the service and the people who bring Pivot to life."
        image="/images/team-station.webp"
      />
      <PhotoGallery />
    </main>
  );
}
