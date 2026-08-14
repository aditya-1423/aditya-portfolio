function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-bg-glow hero-bg-glow-left" />
      <div className="hero-bg-glow hero-bg-glow-right" />

      <div className="hero-container">

        {/* ================= LEFT CONTENT ================= */}
        <div className="hero-text">

          <div className="availability">
            <span className="availability-dot" />
            Available for freelance work
          </div>

          <p className="hero-label">
            FRONTEND DEVELOPER
          </p>

          <h1>
            I build
            <br />
            <span>digital experiences.</span>
          </h1>

          <p className="hero-description">
            Hi, I'm Aditya. I create modern, responsive and user-friendly
            websites using React, JavaScript and modern frontend technologies.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Work <span>→</span>
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">

            <span>Find me on</span>

            <a
              href="https://github.com/aditya-1423"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              IG
            </a>

          </div>

        </div>


        {/* ================= RIGHT IMAGE ================= */}
        <div className="hero-visual">

          {/* Decorative circles */}
          <div className="visual-circle circle-one" />
          <div className="visual-circle circle-two" />


          {/* PROFILE CARD */}
          <div className="profile-card">

            <div className="profile-image-container">

             <img src={`${import.meta.env.BASE_URL}images/adi.jpeg`} alt="Aditya" />

            </div>

          </div>


          {/* FLOATING CARD - FRONTEND */}
          <div className="floating-card floating-card-one">

            <div className="floating-icon">
              ⚡
            </div>

            <div>
              <strong>Frontend</strong>
              <small>Developer</small>
            </div>

          </div>


          {/* FLOATING CARD - RESPONSIVE */}
          <div className="floating-card floating-card-two">

            <div className="floating-icon">
              ✓
            </div>

            <div>
              <strong>Responsive</strong>
              <small>Design</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;