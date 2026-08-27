import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { About } from "@/pages/about";
import { Assets } from "@/pages/assets";
import { Contact } from "@/pages/contact";
import { Home } from "@/pages";
import { Services } from "@/pages/services";
import { useEffect } from "react";

function PageMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    upsertMeta("description", description);
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
  }, [title, description]);

  return null;
}

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Pivot Integrated Energy Services Ltd - Energy For Tomorrow",
    description:
      "Pivot Integrated Energy Services Ltd provides affordable, reliable petroleum trading, importation, distribution, supply, aviation and storage solutions across Nigeria and Sub-Saharan Africa.",
  },
  "/about": {
    title: "About Us | Pivot Integrated Energy Services Ltd",
    description:
      "Pivot Integrated Energy Services Ltd is an indigenous oil and gas company founded in 2017, focused on trading, importation and distribution of refined petroleum products.",
  },
  "/assets": {
    title: "Assets & Facilities | Pivot Integrated Energy Services Ltd",
    description:
      "Explore Pivot Integrated Energy's Dubai storage tank, Calabar tank farm and MT Yu Yi oil tanker.",
  },
  "/contact": {
    title: "Contact Us | Pivot Integrated Energy Services Ltd",
    description:
      "Contact Pivot Integrated Energy Services Ltd for supply, distribution, petroleum trading and storage enquiries.",
  },
  "/services": {
    title: "Our Services | Pivot Integrated Energy Services Ltd",
    description:
      "Bulk importation and trading, retail distribution, industrial supply and aviation energy services for public and private sector clients.",
  },
};

export function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageMeta {...pageMeta["/"]} />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <PageMeta {...pageMeta["/about"]} />
              <About />
            </>
          }
        />
        <Route
          path="/assets"
          element={
            <>
              <PageMeta {...pageMeta["/assets"]} />
              <Assets />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <PageMeta {...pageMeta["/contact"]} />
              <Contact />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <PageMeta {...pageMeta["/services"]} />
              <Services />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <PageMeta
                title="Page Not Found | Pivot Integrated Energy Services Ltd"
                description="The requested Pivot Integrated Energy Services Ltd page could not be found."
              />
              <NotFound />
            </>
          }
        />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
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
        <Link to="/" className="btn-primary mt-8">
          Return Home
        </Link>
      </div>
    </section>
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
