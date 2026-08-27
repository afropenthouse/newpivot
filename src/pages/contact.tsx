import { useState } from "react";
import { Building2, Mail, MapPin, Paperclip, Phone } from "lucide-react";
import { toast } from "sonner";

import { PageHero } from "@/components/site/PageHero";
import { Toaster } from "@/components/ui/sonner";
import heroRefinery from "@/assets/hero-refinery.jpg";

const offices = [
  {
    name: "Head Office",
    address: "No. 1B Sikiru Alade Oloko Crescent, Lekki Phase 1, Lagos.",
    phones: ["02013438111"],
    email: "sales@pivotintegratedenergy.com",
    map: "https://www.google.com/maps?q=Sikiru%20Alade%20Oloko%20Crescent%20Lekki%20Phase%201%20Lagos%20Nigeria&output=embed",
  },
  {
    name: "Port Harcourt Office",
    address: "Digital Energy Close, Off Igboeche road, by Eleme Junction, Port Harcourt, Nigeria",
    phones: ["0703 468 8358", "0707 945 8903"],
    email: "info@pivotintegratedenergy.com",
    map: "https://www.google.com/maps?q=Digital%20Energy%20Close%20Off%20Igboeche%20road%20Eleme%20Junction%20Port%20Harcourt%20Nigeria&output=embed",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us your supply requirement."
        subtitle="Thank you for choosing to work with us. Please fill the contact form with your requirements and our team will contact you."
        image={heroRefinery}
      />

      <section className="container-grid grid gap-10 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
        <div>
          <p className="label-caps text-primary-dark">Reach Pivot</p>
          <h2 className="headline-lg mt-4">
            Oil and gas enquiries, handled with operational clarity.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Share your product needs, delivery location, company details and any relevant
            attachment. The Pivot Integrated Energy team will follow up with the right commercial or
            operations contact.
          </p>

          <div className="mt-8 grid gap-4">
            {offices.map((office) => (
              <div key={office.name} className="panel p-6">
                <h3 className="font-display text-lg font-bold">{office.name}</h3>
                <p className="mt-3 flex gap-3 text-sm leading-7 text-muted-foreground">
                  <MapPin className="mt-1 size-4 shrink-0 text-primary-dark" />
                  {office.address}
                </p>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {office.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+234${phone.replace(/\D/g, "").slice(1)}`}
                      className="flex items-center gap-3 hover:text-primary-dark"
                    >
                      <Phone className="size-4 text-primary-dark" /> {phone}
                    </a>
                  ))}
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 hover:text-primary-dark"
                  >
                    <Mail className="size-4 text-primary-dark" /> {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          className="rounded-lg border border-border bg-card p-6 shadow-lift lg:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Thank you. Our team will contact you shortly.");
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="label-caps text-muted-foreground">First name *</span>
              <input required className="field mt-2" name="firstName" />
            </label>
            <label className="block">
              <span className="label-caps text-muted-foreground">Last name *</span>
              <input required className="field mt-2" name="lastName" />
            </label>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="label-caps text-muted-foreground">Phone</span>
              <input className="field mt-2" name="phone" />
            </label>
            <label className="block">
              <span className="label-caps text-muted-foreground">Company</span>
              <input className="field mt-2" name="company" />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="label-caps text-muted-foreground">Email *</span>
            <input required type="email" className="field mt-2" name="email" />
          </label>
          <label className="mt-5 block">
            <span className="label-caps text-muted-foreground">Your location</span>
            <input className="field mt-2" name="location" />
          </label>
          <label className="mt-5 block">
            <span className="label-caps text-muted-foreground">Message</span>
            <textarea rows={5} className="field mt-2 resize-none" name="message" />
          </label>
          <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-sm border border-dashed border-border bg-surface-low p-4 text-sm text-muted-foreground">
            <Paperclip className="size-4 text-primary-dark" />
            <span>Include an attachment</span>
            <input type="file" className="sr-only" name="attachment" />
          </label>
          <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
            {sent ? "Message Sent" : "Submit"}
          </button>
        </form>
      </section>

      <section className="bg-surface-container py-24">
        <div className="container-grid">
          <div className="max-w-2xl">
            <p className="label-caps text-primary-dark">Find Us</p>
            <h2 className="headline-lg mt-4">Offices mapped for easier visits.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {offices.map((office) => (
              <article
                key={office.name}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-panel"
              >
                <div className="p-5">
                  <h3 className="flex items-center gap-3 font-display text-lg font-bold">
                    <Building2 className="size-5 text-primary-dark" /> {office.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{office.address}</p>
                </div>
                <iframe
                  title={`${office.name} map`}
                  src={office.map}
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
}
