import type { Metadata } from "next";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { offices } from "@/lib/company";
export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Connect with Pivot Integrated Energy in Lagos, Port Harcourt, Accra, London and Dubai.",
  openGraph: {
    title: "Contact us",
    description:
      "Connect with Pivot Integrated Energy in Lagos, Port Harcourt, Accra, London and Dubai.",
  },
  twitter: {
    title: "Contact us",
    description:
      "Connect with Pivot Integrated Energy in Lagos, Port Harcourt, Accra, London and Dubai.",
  },
};
export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="CONTACT US"
        title="Let's move forward, together."
        subtitle="Tell us what you need. Our team is ready to discuss trading, supply, distribution and storage requirements."
        image="/images/welcome.webp"
      />
      <section className="container-grid section-space contact-grid">
        <div>
          <p className="eyebrow">START A CONVERSATION</p>
          <h2>
            Good partnerships
            <br />
            start here.
          </h2>
          <p className="body-copy">
            Share your product, volume and delivery location so we can connect you with the right
            team.
          </p>
          <a className="contact-detail" href="mailto:sales@pivotintegratedenergy.com">
            <Mail size={20} />
            <span>
              Sales enquiries<strong>sales@pivotintegratedenergy.com</strong>
            </span>
          </a>
          <a className="contact-detail" href="mailto:info@pivotintegratedenergy.com">
            <Mail size={20} />
            <span>
              General enquiries<strong>info@pivotintegratedenergy.com</strong>
            </span>
          </a>
          <a className="contact-detail" href="tel:+2348167610298">
            <Phone size={20} />
            <span>
              Call our team<strong>+234 816 761 0298</strong>
            </span>
          </a>
        </div>
        <EnquiryForm />
      </section>
      <section className="solutions-section section-space">
        <div className="container-grid">
          <p className="eyebrow">FIND PIVOT</p>
          <h2>Local knowledge. Global connections.</h2>
          <div className="office-grid">
            {offices.map((o) => (
              <article key={o.name}>
                <p className="eyebrow">{o.label}</p>
                <h3>{o.name}</h3>
                <p>{o.address}</p>
                {o.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>
                    {p}
                  </a>
                ))}
                <a
                  className="office-map"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={15} /> View on map <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
