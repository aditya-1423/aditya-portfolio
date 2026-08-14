import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-visual">

          <div className="about-image-card">
           <img
  src={`${import.meta.env.BASE_URL}src/aditya.jpeg`}
  alt="Aditya"
/>

            <div className="about-image-overlay"></div>
          </div>

          <div className="about-experience">
            <strong>2+</strong>
            <span>Years Learning</span>
          </div>

          <div className="about-decoration about-decoration-one"></div>
          <div className="about-decoration about-decoration-two"></div>
        </div>


        {/* RIGHT SIDE */}
        <div className="about-content">

          <div className="section-label">
            ABOUT ME
          </div>

          <h2 className="about-title">
            Building with <span>purpose.</span>
          </h2>

          <p className="about-description">
            I'm a frontend developer who enjoys transforming ideas into
            clean, modern and responsive web experiences.
          </p>

          <p className="about-description">
            My focus is on creating interfaces that are visually appealing,
            easy to use and work smoothly across different devices. I enjoy
            learning new technologies and continuously improving my
            development skills.
          </p>


          {/* FEATURES */}
          <div className="about-features">

            <div className="about-feature">
              <div className="feature-number">01</div>

              <div>
                <h3>Clean Code</h3>
                <p>Reusable and maintainable components.</p>
              </div>
            </div>


            <div className="about-feature">
              <div className="feature-number">02</div>

              <div>
                <h3>Responsive</h3>
                <p>Designed for every screen size.</p>
              </div>
            </div>


            <div className="about-feature">
              <div className="feature-number">03</div>

              <div>
                <h3>Modern UI</h3>
                <p>Clean interfaces with smooth interactions.</p>
              </div>
            </div>


            <div className="about-feature">
              <div className="feature-number">04</div>

              <div>
                <h3>Problem Solving</h3>
                <p>Turning ideas into working products.</p>
              </div>
            </div>

          </div>


          {/* BUTTON */}
          <a href="#contact" className="about-button">
            Let's Work Together
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;