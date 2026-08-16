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

    // YOUR WHATSAPP NUMBER
    // Country code ke saath, + ya spaces ke bina
    const whatsappNumber = "91XXXXXXXXXX";

    // WhatsApp message
    const whatsappMessage = `Hello Aditya,

I found your portfolio and would like to discuss a project.

Name: ${name}
Email: ${email}

Message:
${message}`;

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
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
              href="mailto:adityaverma1325@gmail.com"
              className="contact-link"
            >
              <div className="contact-link-icon">@</div>

              <div className="contact-link-text">
                <span>Email</span>
                <strong>adityaverma1325@gmail.com</strong>
              </div>

              <div className="contact-link-arrow">↗</div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/aditya-verma-884734429"
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
              href="https://github.com/aditya-1423"
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
                required
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
                required
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
                required
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