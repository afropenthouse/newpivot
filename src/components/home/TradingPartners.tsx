export function TradingPartners() {
  return (
    <section className="container-grid section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR TRADING PARTNERS</p>
          <h2>Connected by a shared standard.</h2>
        </div>
        <p className="heading-note">
          Working with recognised energy companies to strengthen supply reliability and
          international reach.
        </p>
      </div>
      <div className="partner-grid">
        {[
          "Dangote Group",
          "Trafigura",
          "BB Energy",
          "Glencore",
          "BP",
          "Vitol",
          "Sunbeth",
          "Total Nigeria",
          "Tulcan",
        ].map((p) => (
          <span key={p}>{p}</span>
        ))}
      </div>
    </section>
  );
}
