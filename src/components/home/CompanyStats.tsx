export function CompanyStats() {
  return (
    <section className="facts-band">
      <div className="container-grid facts-grid">
        {[
          ["2017", "Our story began"],
          ["5", "Global offices"],
          ["100+", "Yu Yi vessel voyages"],
          ["30,000 MT", "Average cargo per lifting"],
        ].map(([number, label]) => (
          <div key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
