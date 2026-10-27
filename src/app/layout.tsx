import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import "@/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pivotintegratedenergy.com"),
  title: {
    default: "Pivot Integrated Energy | Energy for today, tomorrow & the future",
    template: "%s | Pivot Integrated Energy",
  },
  description:
    "Petroleum trading, supply, distribution and storage. African roots. International reach.",
  authors: [{ name: "Pivot Integrated Energy Services Limited" }],
  openGraph: {
    type: "website",
    siteName: "Pivot Integrated Energy",
    images: [{ url: "/images/station.webp", alt: "Pivot Energy retail station" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/station.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
