const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* TOP FOOTER */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Aditya<span>.</span>
            </a>

            <p>
              Frontend Developer building modern, responsive and
              user-friendly digital experiences.
            </p>
          </div>


          {/* FOOTER NAVIGATION */}
          <div className="footer-column">
            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>


          {/* SOCIAL LINKS */}
          <div className="footer-column">
            <h4>Connect</h4>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <span>↗</span>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span>↗</span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>

            <a href="mailto:your@email.com">
              Email
              <span>↗</span>
            </a>
          </div>


          {/* CTA */}
          <div className="footer-column footer-cta">
            <h4>Let's work together</h4>

            <p>
              Have a project in mind? Let's build something great.
            </p>

            <a href="#contact" className="footer-contact-button">
              Get in touch
              <span>→</span>
            </a>
          </div>

        </div>


        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">

          <div className="footer-copyright">
            © {currentYear} Aditya. All rights reserved.
          </div>

          <div className="footer-built">
            Built with React & Tailwind CSS.
          </div>

          <a href="#home" className="footer-back-top">
            Back to top ↑
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;