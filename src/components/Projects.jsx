function Projects() {
  const projects = [
    {
      number: "01",
      title: "Yuva Sarthi NGO",
      description:
        "A complete responsive NGO website with membership, gallery, donation and organization information.",
      tags: ["React", "Tailwind", "Firebase"],
      image: `${import.meta.env.BASE_URL}images/ngo.jpeg`,
      live: "https://yuva-sarathi-ngo.web.app",
      github: "#https://github.com/aditya-1423/yuva-sarathi-ngo",
    },
    {
      number: "02",
      title: "Admin Portal",
      description:
        "A modern admin dashboard for managing membership applications, members and website data.",
      tags: ["React", "Firebase", "Tailwind"],
      image: `${import.meta.env.BASE_URL}images/admin.jpeg`,
      live: "https://aditya-1423.github.io/yuva-sarathi-admin-portal/",
      github: "#https://github.com/aditya-1423/yuva-sarathi-admin-portal",
    },
    {
      number: "03",
      title: "Membership System",
      description:
        "A responsive membership application system connected with Firebase for storing applicant data.",
      tags: ["React", "Firebase", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/member.jpeg`,
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Header */}

           <div className="skills-label-wrap">
            <span className="skills-line"></span>

            <p className="section-label skills-label">
              MY WORK
            </p>

            <span className="skills-line"></span>
          </div>
        <div className="projects-header">
          <div>
            {/* <p className="section-label">My Work</p> */}

            
         



            <h2 className="projects-title">
              Featured <span>Projects</span>
            </h2>
          </div>

          <p className="projects-intro">
            A selection of projects I've worked on using modern frontend
            technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="premium-project-card"
              key={project.number}
            >

              {/* Image */}
              <div className="project-visual">

                <div className="project-number">
                  {project.number}
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />


 

               
        

                {/* <div className="project-view">

                   <a
                    href={project.live}
                    className="project-link primary-project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <span>↗</span>
                  </a>
                   
                 
                </div> */}

              </div>

              {/* Content */}
              <div className="project-content">

                <div className="project-content-top">

                  <p className="project-label">
                    PROJECT {project.number}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                </div>

                {/* Technologies */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="project-footer">

                  <a
                    href={project.live}
                    className="project-link primary-project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <span>↗</span>
                  </a>

                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;