const slides = [
  {
    title: 'Dream Animex Originals',
    subtitle: 'From sketch to screen, we craft cinematic anime worlds.',
    tag: 'New Season',
  },
  {
    title: 'Visionary Studios',
    subtitle: 'Collaborate with elite directors, writers, and animators.',
    tag: 'Featured',
  },
  {
    title: 'Global Talent Guild',
    subtitle: 'Join a collective shaping the future of animation.',
    tag: 'Open Calls',
  },
];

function Sliding() {
  return (
    <section className="slide-shell">
      <div className="slide-track">
        {[...slides, ...slides].map((slide, index) => (
          <article className="slide-card" key={`${slide.title}-${index}`}>
            <span className="slide-tag">{slide.tag}</span>
            <h3>{slide.title}</h3>
            <p>{slide.subtitle}</p>
            <button className="slide-btn" type="button">
              Explore
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Sliding;
