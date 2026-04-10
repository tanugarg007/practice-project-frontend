function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">DA</span>
          <div>
            <h3>Dream Animex</h3>
            <p>Cinematic anime studio for bold creators worldwide.</p>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Studio</h4>
            <a href="/studios">Studios</a>
            <a href="/projects">Projects</a>
            <a href="/gallery">Gallery</a>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="/talent">Talent</a>
            <a href="/events">Events</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <h4>Social</h4>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.youtube.com">YouTube</a>
            <a href="https://www.behance.net">Behance</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dream Animex Studio. All rights reserved.</span>
        <span>Based in Mumbai · Working worldwide</span>
      </div>
    </footer>
  );
}

export default Footer;
