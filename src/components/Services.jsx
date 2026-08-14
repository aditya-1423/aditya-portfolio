import {
  FiGlobe,
  FiLayout,
  FiCode,
  FiDatabase,
  FiArrowUpRight,
} from "react-icons/fi";

function Services() {
  const services = [
    {
      number: "01",
      title: "Website Development",
      description:
        "Modern, fast and responsive websites built around your brand, goals and audience.",
      tags: ["React", "JavaScript", "Responsive"],
      icon: FiGlobe,
    },
    {
      number: "02",
      title: "Landing Pages",
      description:
        "Clean and engaging landing pages designed to present products and services effectively.",
      tags: ["UI Design", "Responsive", "SEO"],
      icon: FiLayout,
    },
    {
      number: "03",
      title: "React Development",
      description:
        "Interactive and reusable interfaces built with modern React architecture and clean components.",
      tags: ["React", "Components", "Vite"],
      icon: FiCode,
    },
    {
      number: "04",
      title: "Firebase Integration",
      description:
        "Connect your frontend with Firebase for databases, authentication and scalable backend features.",
      tags: ["Firebase", "Firestore", "Backend"],
      icon: FiDatabase,
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">

        {/* =========================
            HEADER
        ========================= */}
        <div className="services-header">
          <div className="services-heading">
            <p className="services-label">Services</p>

            <h2 className="services-title">
              What I <span>can build.</span>
            </h2>
          </div>

          <p className="services-intro">
            From simple landing pages to complete web applications, I focus
            on creating useful, polished and responsive digital experiences.
          </p>
        </div>

        {/* =========================
            SERVICE LIST
        ========================= */}
        <div className="services-list">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                className={`service-item ${
                  index === 0 ? "service-active" : ""
                }`}
                key={service.number}
              >
                {/* NUMBER */}
                <div className="service-number">
                  {service.number}
                </div>

                {/* ICON */}
                <div className="service-icon">
                  <Icon />
                </div>

                {/* TITLE */}
                <div className="service-title-wrap">
                  <h3>{service.title}</h3>
                </div>

                {/* CONTENT */}
                <div className="service-content">
                  <p>{service.description}</p>

                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* ARROW */}
                <div className="service-arrow">
                  <FiArrowUpRight />
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            CTA
        ========================= */}
        <div className="services-cta">
          <div className="services-cta-text">
            <span>Have a project in mind?</span>
            <h3>Let's build something great.</h3>
          </div>

          <a href="#contact" className="services-cta-button">
            <span>Start a Project</span>
            <FiArrowUpRight />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;