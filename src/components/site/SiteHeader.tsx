import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/our-services", label: "Our Services" },
  { to: "/assets-facilities", label: "Assets & Facilities" },
  { to: "/contact", label: "Contact Us" },
];

function isActive(pathname: string, to: string) {
  const normalized = pathname.replace(/\/$/, "") || "/";
  const pairs: Record<string, string[]> = {
    "/about-us": ["/about-us", "/about"],
    "/our-services": ["/our-services", "/services"],
    "/assets-facilities": ["/assets-facilities", "/assets"],
  };

  return (pairs[to] ?? [to]).includes(normalized);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname =
    typeof window === "undefined" ? "/" : window.location.pathname.replace(/\/$/, "") || "/";

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-on-charcoal shadow-lg shadow-black/10">
      <div className="container-grid flex h-18 items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src="/pivot-logo-white.png"
            alt="Pivot Integrated Energy"
            className="h-11 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className={`relative py-7 text-sm font-semibold text-on-charcoal/78 transition-colors hover:text-primary-container ${
                isActive(pathname, item.to)
                  ? "text-primary-container after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-primary"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/contact" className="btn-primary hidden lg:inline-flex">
          Request Supply
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-sm border border-white/15 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-charcoal lg:hidden">
          <div className="container-grid flex flex-col py-2">
            {nav.map((item) => (
              <a
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-4 text-sm font-semibold last:border-0 ${
                  isActive(pathname, item.to) ? "text-primary-container" : "text-on-charcoal/80"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
