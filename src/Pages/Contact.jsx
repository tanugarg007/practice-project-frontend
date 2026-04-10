function Contact() {
  return (
    <section className="contact-shell">
      <div className="contact-card">
        <a className="contact-close" href="/" aria-label="Close contact form">
          ×
        </a>
        <div className="contact-header">
          <span className="gallery-kicker">Contact</span>
          <h2>Let’s talk about your next collaboration.</h2>
          <p>
            Share your goals and we will connect you with the right creative
            team.
          </p>
        </div>

        <form className="contact-form">
          <label>
            Full name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email address
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Phone (optional)
            <input type="tel" name="phone" placeholder="+91 98xxxxxx" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about the project or questions you have."
            />
          </label>
          <button className="cta-btn" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
