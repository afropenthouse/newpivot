import { useEffect, useMemo, useSyncExternalStore } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { About } from "@/pages/about";
import { Assets } from "@/pages/assets";
import { Contact } from "@/pages/contact";
import { Home } from "@/pages";
import { Services } from "@/pages/services";

const pages = {
  "/": {
    title: "Pivot Integrated Energy Services Ltd - Energy For Tomorrow",
    description:
      "Pivot Integrated Energy Services Ltd provides affordable, reliable petroleum trading, importation, distribution, supply, aviation and storage solutions across Nigeria and Sub-Saharan Africa.",
    component: Home,
  },
  "/about": {
    title: "About Us | Pivot Integrated Energy Services Ltd",
    description:
      "Pivot Integrated Energy Services Ltd is an indigenous oil and gas company founded in 2017, focused on trading, importation and distribution of refined petroleum products.",
    component: About,
  },
  "/assets": {
    title: "Assets & Facilities | Pivot Integrated Energy Services Ltd",
    description:
      "Explore Pivot Integrated Energy's Dubai storage tank, Calabar tank farm and MT Yu Yi oil tanker.",
    component: Assets,
  },
  "/contact": {
    title: "Contact Us | Pivot Integrated Energy Services Ltd",
    description:
      "Contact Pivot Integrated Energy Services Ltd for supply, distribution, petroleum trading and storage enquiries.",
    component: Contact,
  },
  "/services": {
    title: "Our Services | Pivot Integrated Energy Services Ltd",
    description:
      "Bulk importation and trading, retail distribution, industrial supply and aviation energy services for public and private sector clients.",
    component: Services,
  },
};

const aliases: Record<string, keyof typeof pages> = {
  "/about-us": "/about",
  "/assets-facilities": "/assets",
  "/our-services": "/services",
};

type PagePath = keyof typeof pages;

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getPathname() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  return aliases[pathname] ?? pathname;
}

function NotFound() {
  return (
    <section className="container-grid flex min-h-[62vh] items-center justify-center py-24">
      <div className="max-w-xl text-center">
        <p className="label-caps text-primary">404</p>
        <h1 className="headline-lg mt-4">This route is not in the supply chain.</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The page may have moved, but the main Pivot Integrated Energy site is ready from the
          homepage.
        </p>
        <a href="/" className="btn-primary mt-8">
          Return Home
        </a>
      </div>
    </section>
  );
}

export function App() {
  const pathname = useSyncExternalStore(subscribe, getPathname);
  const page = pages[pathname as PagePath];
  const Page = page?.component ?? NotFound;

  const metadata = useMemo(
    () => ({
      title: page?.title ?? "Page Not Found | Pivot Integrated Energy Services Ltd",
      description:
        page?.description ??
        "The requested Pivot Integrated Energy Services Ltd page could not be found.",
    }),
    [page],
  );

  useEffect(() => {
    document.title = metadata.title;
    upsertMeta("description", metadata.description);
    upsertMeta("og:title", metadata.title, "property");
    upsertMeta("og:description", metadata.description, "property");
  }, [metadata]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Page />
      </main>
      <SiteFooter />
    </div>
  );
}

function upsertMeta(key: string, content: string, attribute: "name" | "property" = "name") {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.content = content;
}
