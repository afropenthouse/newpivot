const partners = [
  { name: "Trafigura", logo: "/trafigura.png" },
  { name: "Vitol", logo: "/vitol.png" },
  { name: "Total Nigeria", logo: "/total.png" },
  { name: "Sahara Group", logo: "/sahara.png" },
  { name: "Mercuria", logo: "/mercuria.png" },
  { name: "Mobil", logo: "/Mobil-logo.png" },
  { name: "Mocoh", logo: "/mocoh.png" },
  { name: "Prax", logo: "/prax.jpg" },
  { name: "AA Rano", logo: "/aarano-logo.png" },
  { name: "Africa Terminals", logo: "/Africa-Terminals-Logo.png" },
  { name: "Integrated Oil and Gas", logo: "/integrated_logo.png" },
  { name: "Nimex", logo: "/nimex.jpg" },
  { name: "Shema Petroleum", logo: "/shema.jpg" },
  { name: "Sinoma / CNBM", logo: "/sinoma.jpg" },
  { name: "Eko Hotels & Suites", logo: "/eko.jpg" },
  { name: "Oriental Hotels & Resorts", logo: "/oriental.jpg" },
];

export function TradingPartners() {
  return (
    <section className="container-grid section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR TRADING PARTNERS</p>
          <h2>Connected by a shared standard.</h2>
        </div>
      </div>
      <div className="partner-grid" role="list" aria-label="Our trading partners">
        {partners.map((partner) => (
          <div className="partner-logo" role="listitem" key={partner.name}>
            <img src={partner.logo} alt={partner.name} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </section>
  );
}
