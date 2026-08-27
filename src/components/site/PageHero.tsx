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
    <section className="relative isolate min-h-[12rem] overflow-hidden bg-charcoal">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-52"
      />
      <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/86 to-charcoal/25" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/45 to-transparent" />
      <div className="industrial-grid absolute inset-0 opacity-50" />
      <div className="container-grid relative py-10 lg:py-14">
        {eyebrow && <p className="label-caps mb-5 text-primary-container">{eyebrow}</p>}
        <h1 className="display-lg max-w-4xl text-on-charcoal">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-on-charcoal/78">{subtitle}</p>
      </div>
    </section>
  );
}
