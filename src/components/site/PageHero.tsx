export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="page-hero">
      <img src={image} alt="" />
      <div className="page-hero-shade" />
      <div className="container-grid">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
