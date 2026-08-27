import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const offices = [
  {
    name: "Head Office",
    address: "No. 1B Sikiru Alade Oloko Crescent, Lekki Phase 1, Lagos.",
    phones: ["02013438111"],
    email: "sales@pivotintegratedenergy.com",
  },
  {
    name: "Port Harcourt Office",
    address: "Digital Energy Close, Off Igboeche road, by Eleme Junction, Port Harcourt, Nigeria",
    phones: ["0703 468 8358", "0707 945 8903"],
    email: "info@pivotintegratedenergy.com",
  },
];

const nav = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/our-services", label: "Services" },
  { to: "/assets-facilities", label: "Assets" },
  { to: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="industrial-grid bg-charcoal text-on-charcoal">
      <div className="border-y border-white/10 bg-primary py-4 text-primary-foreground">
        <div className="container-grid flex flex-col gap-3 text-sm font-semibold md:flex-row md:items-center md:justify-between">
          <span>Reliable petroleum trading, supply and storage across Nigeria.</span>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-display text-xs uppercase"
          >
            Start a conversation <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>

      <div className="container-grid grid gap-10 py-16 lg:grid-cols-[1.15fr_0.7fr_1.3fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/pivot-logo-white.png"
              alt="Pivot Integrated Energy"
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-on-charcoal/68">
            A dynamic indigenous oil and gas company serving public and private sector clients with
            quality refined petroleum products, integrated logistics and dependable downstream
            infrastructure.
          </p>
          <div className="mt-7 flex flex-col gap-3 text-sm text-on-charcoal/75">
            <a
              href="tel:+2342013438111"
              className="flex items-center gap-3 hover:text-primary-container"
            >
              <Phone className="size-4 text-primary" /> +234 201 343 8111
            </a>
            <a
              href="mailto:sales@pivotintegratedenergy.com"
              className="flex items-center gap-3 hover:text-primary-container"
            >
              <Mail className="size-4 text-primary" /> sales@pivotintegratedenergy.com
            </a>
          </div>
        </div>

        <div>
          <p className="label-caps text-primary-container">Navigation</p>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((l) => (
              <li key={l.to}>
                <a
                  href={l.to}
                  className="text-on-charcoal/72 transition-colors hover:text-primary-container"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-caps text-primary-container">Offices</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {offices.map((office) => (
              <div
                key={office.name}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
              >
                <p className="font-display text-base font-bold">{office.name}</p>
                <p className="mt-3 flex gap-2 text-xs leading-relaxed text-on-charcoal/65">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  {office.address}
                </p>
                <div className="mt-4 space-y-1 text-xs text-on-charcoal/75">
                  {office.phones.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                  <p>{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-grid flex flex-col gap-2 py-6 text-xs text-on-charcoal/55 md:flex-row md:items-center md:justify-between">
          <span>Copyright 2026 (c) Pivot Integrated Energy Services Ltd.</span>
          <span>Built for reliable energy operations.</span>
        </div>
      </div>
    </footer>
  );
}
