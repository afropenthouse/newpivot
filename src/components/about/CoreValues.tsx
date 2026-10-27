const values = [
  ["Integrity", "Ethical standards and professionalism in every engagement."],
  ["Honesty", "Transparency, accountability and trust in our business practices."],
  ["Impact", "Solutions that create measurable value and sustainable growth."],
  ["Service", "Customer satisfaction and stakeholder excellence."],
  ["Quality", "High operational and product standards across our activities."],
];

export function CoreValues() {
  return (
    <section className="container-grid section-space">
      <p className="eyebrow">WHAT WE STAND FOR</p>
      <h2>Our values, in action.</h2>
      <div className="values-list">
        {values.map(([title, body], i) => (
          <article key={title}>
            <span>0{i + 1}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
