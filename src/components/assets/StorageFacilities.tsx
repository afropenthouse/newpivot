const facilities = [
  ["Lagos, Nigeria", "Multiple terminals in Apapa & Lagos Island", "~60,000 MT"],
  ["Calabar, Nigeria", "Esuk Utan Industrial Layout, Cross River State", "~30,000 MT"],
  ["Onne, Nigeria", "Tonimas Depot, Port Harcourt, Rivers State", "~10,000 MT"],
  ["Sharjah, U.A.E.", "Crystal Petroleum Terminals, Sharjah", "70,000 CBM"],
];

export function StorageFacilities() {
  return (
    <section className="container-grid section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">STORAGE INFRASTRUCTURE</p>
          <h2>Positioned for reliable supply.</h2>
        </div>
        <p className="heading-note">
          Bulk handling and storage capabilities across key locations, as reported in our 2026
          profile.
        </p>
      </div>
      <div className="facility-grid">
        {facilities.map(([name, address, capacity]) => (
          <article key={name}>
            <p className="eyebrow">STORAGE LOCATION</p>
            <h3>{name}</h3>
            <p>{address}</p>
            <strong>{capacity}</strong>
            <span>Storage capacity</span>
          </article>
        ))}
      </div>
    </section>
  );
}
