import { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Studios', href: '/studios' },
  { label: 'Projects', href: '/projects' },
  { label: 'Talent', href: '/talent' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-shell">
      <div className="nav-inner">
        <Link className="nav-brand" to="/">
          <span className="brand-mark">DA</span>
          <span className="brand-text">
            Dream Animex
            <span className="brand-sub">Cinematic Anime Studio</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="toggle-bar" />
          <span className="toggle-bar" />
          <span className="toggle-bar" />
          <span className="sr-only">Toggle menu</span>
        </button>

        <div id="nav-menu" className={`nav-links ${isOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={`nav-actions ${isOpen ? 'open' : ''}`}>
          <button className="ghost-btn" type="button">
            Log in
          </button>
          <Link className="cta-btn" to="/enquiry">
            Enquiry
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
