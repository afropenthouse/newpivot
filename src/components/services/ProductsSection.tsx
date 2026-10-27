export function ProductsSection() {
  return (
    <section className="solutions-section section-space">
      <div className="container-grid">
        <p className="eyebrow">OUR PRODUCTS</p>
        <h2>The energy behind your operations.</h2>
        <div className="products-grid">
          {[
            [
              "PMS",
              "Gasoline",
              "Refined petroleum for retail, commercial and transportation needs.",
            ],
            ["AGO", "Gasoil", "Diesel supply for industry, logistics and business operations."],
            [
              "BASE OILS",
              "Base Oils",
              "Feedstock for lubricant production and industrial applications.",
            ],
          ].map(([tag, title, body]) => (
            <article key={title}>
              <p className="eyebrow">{tag}</p>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
