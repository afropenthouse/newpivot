import { Fuel } from "lucide-react";

export function ProductsSection() {
  const products = [
    ["PMS", "Premium Motor Spirit"],
    ["AGO", "Automotive Gasoil"],
    ["ATK", "Aviation Turbine Kerosene"],
  ] as const;

  return (
    <section className="bg-surface-container py-24">
      <div className="container-grid grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="label-caps text-primary-dark">Products we move</p>
          <h2 className="headline-lg mt-4">Refined products for the real economy.</h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Pivot&apos;s product slate supports road transport, industrial power, commercial
            movement and aviation operations with disciplined sourcing and delivery.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {products.map(([code, label]) => (
            <div key={code} className="rounded-lg bg-charcoal p-6 text-on-charcoal shadow-lift">
              <Fuel className="size-6 text-primary-container" />
              <p className="mt-7 font-display text-4xl font-extrabold">{code}</p>
              <p className="mt-2 text-xs leading-5 text-on-charcoal/65">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
