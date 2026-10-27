"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/services", label: "Our services" },
  { to: "/assets", label: "Infrastructure" },
  { to: "/gallery", label: "Gallery" },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container-grid header-inner">
          <Link href="/" aria-label="Pivot Energy home">
            <img src="/pivot-logo-white.png" alt="Pivot Integrated Energy" />
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav">
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                aria-current={pathname === n.to ? "page" : undefined}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link className="header-contact" href="/contact">
            Let's talk <ArrowUpRight size={17} />
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" aria-label="Mobile navigation">
            {[...nav, { to: "/contact", label: "Contact us" }].map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                aria-current={pathname === n.to ? "page" : undefined}
              >
                {n.label}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
