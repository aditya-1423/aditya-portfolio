import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFirebase,
  SiVite,
  SiPostman,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      level: 95,
      description: "Semantic & accessible markup",
      icon: <FaHtml5 />,
      className: "html-icon",
    },
    {
      name: "CSS3",
      level: 90,
      description: "Modern responsive styling",
      icon: <FaCss3Alt />,
      className: "css-icon",
    },
    {
      name: "JavaScript",
      level: 85,
      description: "Interactive web applications",
      icon: <FaJsSquare />,
      className: "js-icon",
    },
    {
      name: "React",
      level: 85,
      description: "Component-based interfaces",
      icon: <FaReact />,
      className: "react-icon",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      description: "Modern UI development",
      icon: <SiTailwindcss />,
      className: "tailwind-icon",
    },
    {
      name: "Firebase",
      level: 80,
      description: "Backend & database integration",
      icon: <SiFirebase />,
      className: "firebase-icon",
    },
  ];

  const technologies = [
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
    {
      name: "Vite",
      icon: <SiVite />,
    },
    {
      name: "REST APIs",
      icon: <SiPostman />,
    },
    {
      name: "Responsive Design",
      icon: "▣",
    },
    {
      name: "UI/UX",
      icon: "✎",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      {/* Decorative background */}
      <div className="skills-glow skills-glow-left"></div>
      <div className="skills-glow skills-glow-right"></div>

      <div className="skills-orbit skills-orbit-left"></div>
      <div className="skills-orbit skills-orbit-right"></div>

      <div className="skills-container">

        {/* =========================
            HEADER
        ========================= */}
        <div className="skills-header">

          <div className="skills-label-wrap">
            <span className="skills-line"></span>

            <p className="section-label skills-label">
              My Skills
            </p>

            <span className="skills-line"></span>
          </div>

          <h2 className="skills-title">
            Tools I <span>work with</span>
          </h2>

          <p className="skills-subtitle">
            Technologies and tools I use to build modern,
            responsive and reliable web experiences.
          </p>
        </div>


        {/* =========================
            SKILL CARDS
        ========================= */}
        <div className="skills-grid">

          {skills.map((skill) => (
            <div
              className="premium-skill-card"
              key={skill.name}
            >

              {/* Icon */}
              <div className={`skill-icon ${skill.className}`}>
                {skill.icon}
              </div>


              {/* Content */}
              <div className="skill-card-content">

                <div className="skill-card-top">

                  <div>
                    <h3>{skill.name}</h3>

                    <p>
                      {skill.description}
                    </p>
                  </div>

                  <span className="skill-percentage">
                    {skill.level}%
                  </span>

                </div>


                {/* Progress */}
                <div className="skill-progress-track">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  >
                    <span></span>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>


        {/* =========================
            TECHNOLOGY TAGS
        ========================= */}
        <div className="technology-tags">

          {technologies.map((item) => (
            <div
              className="technology-pill"
              key={item.name}
            >
              <span className="technology-icon">
                {item.icon}
              </span>

              <span>{item.name}</span>
            </div>
          ))}

        </div>


        {/* Bottom decoration */}
        {/* <div className="skills-bottom-decoration">
          <span></span>
          <b>✦</b>
          <span></span>
        </div> */}

      </div>
    </section>
  );
}

export default Skills;