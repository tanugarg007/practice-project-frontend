import { useState } from 'react';

const galleryItems = [
  {
    title: 'Skyline Reverie',
    tag: 'Feature Film',
    description: 'A neon-soaked odyssey through a floating metropolis.',
    details:
      'A city suspended above the clouds, powered by dreamlight cores. The story follows a courier who discovers a hidden rebellion within the skyline.',
  },
  {
    title: 'Echoes of Aster',
    tag: 'Series',
    description: 'A guardian crew protecting a crystal archipelago.',
    details:
      'A weekly episodic saga centered on a team of protectors who channel elemental shards to shield their floating islands from the void.',
  },
  {
    title: 'Violet Circuit',
    tag: 'Short',
    description: 'A kinetic duel between memory and machine.',
    details:
      'A 12-minute experimental short where a lone pilot battles a sentient archive that rewrites her memories mid-fight.',
  },
  {
    title: 'Sable Harbor',
    tag: 'MV',
    description: 'A lyrical journey across moonlit seas.',
    details:
      'A music video concept blending watercolor washes with neon linework to tell a quiet love story at sea.',
  },
  {
    title: 'Nova Requiem',
    tag: 'Co-Production',
    description: 'A fallen star rises to reclaim the cosmos.',
    details:
      'A co-production epic tracking a starborn heir who must restore a fractured galaxy using ancient symphonic relics.',
  },
  {
    title: 'Mirage Protocol',
    tag: 'Special',
    description: 'A stealth squad navigating shifting realities.',
    details:
      'A high-intensity special where a covert unit infiltrates mirrored dimensions to prevent a reality collapse.',
  },
];

function Gallery({
  title = 'Signature Worlds from Dream Animex',
  subtitle = 'Explore a curated selection of cinematic concepts, series, and collaborations currently in development.',
  kicker = 'Gallery',
}) {
  const [openTitle, setOpenTitle] = useState(null);

  const handleToggle = (titleText) => {
    setOpenTitle((current) => (current === titleText ? null : titleText));
  };

  return (
    <section className="gallery-shell">
      <div className="gallery-header">
        <div>
          <span className="gallery-kicker">{kicker}</span>
          <h2>{title}</h2>
        </div>
        <p>{subtitle}</p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article
            className={`gallery-card ${openTitle === item.title ? 'expanded' : ''}`}
            key={item.title}
          >
            <span className="gallery-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {openTitle === item.title && (
              <div className="gallery-details">
                <p>{item.details}</p>
              </div>
            )}
            <button
              className="ghost-btn"
              type="button"
              onClick={() => handleToggle(item.title)}
              aria-expanded={openTitle === item.title}
            >
              {openTitle === item.title ? 'Hide details' : 'View concept'}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
