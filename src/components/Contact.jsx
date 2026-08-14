import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Thanks! Your message has been submitted.");

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-content">

          <div className="section-label">CONTACT</div>

          <h2 className="contact-title">
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p className="contact-description">
            Whether you need a portfolio, landing page or a complete web
            application, feel free to get in touch.
          </p>

          <div className="contact-links">

            {/* EMAIL */}
            <a
              href="mailto:your@email.com"
              className="contact-link"
            >
              <div className="contact-link-icon">@</div>

              <div className="contact-link-text">
                <span>Email</span>
                <strong>your@email.com</strong>
              </div>

              <div className="contact-link-arrow">↗</div>
            </a>

            {/* LINKEDIN */}
            <a
              href="#"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-icon">in</div>

              <div className="contact-link-text">
                <span>LinkedIn</span>
                <strong>Connect with me</strong>
              </div>

              <div className="contact-link-arrow">↗</div>
            </a>

            {/* GITHUB */}
            <a
              href="#"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-icon">GH</div>

              <div className="contact-link-text">
                <span>GitHub</span>
                <strong>View my repositories</strong>
              </div>

              <div className="contact-link-arrow">↗</div>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-wrapper">

          <div className="contact-form-heading">
            <h3>Send a message</h3>

            <p>
              I'll get back to you as soon as possible.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="contact-input"
                autoComplete="name"
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="contact-input"
                autoComplete="email"
              />
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                className="contact-input contact-textarea"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="contact-submit"
            >
              <span>Send Message</span>
              <span className="submit-arrow">→</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};



export default Contact;