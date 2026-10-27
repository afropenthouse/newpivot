export function LeadershipTeam() {
  return (
    <section className="team-section section-space">
      <div className="container-grid">
        <p className="eyebrow">OUR LEADERSHIP</p>
        <h2>Experience behind our ambition.</h2>
        <div className="leadership-grid">
          {[
            ["Babajide Babatope", "Chief Executive Officer"],
            ["Damilare Babatope", "Chief Technical Officer"],
            ["Tunji Onakoya", "Global Head of Operations"],
            ["Dipo Dabiri", "Global Head of Finance"],
            ["Olaoluwa Ogunkoya", "Chief Financial Officer"],
          ].map(([name, role]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
