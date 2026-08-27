export function ClientsSection({
  clientLogos,
  partnerLogos,
}: {
  clientLogos: { name: string; src: string }[];
  partnerLogos: { name: string; src: string }[];
}) {
  return (
    <section className="container-grid py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="label-caps text-primary-dark">Our Clients</p>
          <h2 className="headline-lg mt-4">Trusted by industry leaders.</h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            A cleaner, more visual partner board using the same names from the current site.
          </p>
        </div>
        <div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="grid min-h-28 place-items-center rounded-lg border border-border bg-white p-5 shadow-panel transition-transform duration-200 hover:-translate-y-1"
              >
                <img
                  src={client.src}
                  alt={`${client.name} logo`}
                  className="max-h-16 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-border pt-12">
        <p className="label-caps text-muted-foreground">Our Trading Partners</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="grid min-h-24 place-items-center rounded-lg border border-border bg-white p-5 shadow-panel transition-transform duration-200 hover:-translate-y-1"
            >
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                className="max-h-14 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
