import React from "react";
import "./Projects.css";

function Projects() {
  const featuredProject = {
    title: "Movie Sentiment Analysis",
    duration: "September 2025 – November 2025",
    place: "Mahindra École Centrale, Bahadurpally",
    points: [
      "Developed understanding of how computers process and interpret human language.",
      "Worked with preprocessing techniques such as tokenization, stop word removal, stemming, and lemmatization.",
      "Learned sentiment classification methods for textual data."
    ]
  };

  const sideProjects = [
    {
      title: "Forestry Management",
      duration: "November 2025 – December 2025",
      place: "Mahindra École Centrale, Bahadurpally",
      points: [
        "Applied OOPS concepts such as Encapsulation, Abstraction, Inheritance, and Polymorphism.",
        "Improved logical thinking through practical implementation."
      ]
    },
    {
      title: "Python Programming Training",
      duration: "December 2024 – February 2025",
      place: "Internshala",
      points: [
        "Worked with NumPy, Pandas, and Matplotlib.",
        "Built stronger problem-solving habits through guided practice."
      ]
    }
  ];

  return (
    <div className="projects-page">
      <section className="projects-top glass-card">
        <p className="projects-tag">Projects</p>
        <h1>Academic Work & Technical Learning</h1>
        <p className="projects-intro">
          A selected overview of academic projects and technical training that
          reflect my interest in software development, object-oriented design,
          and text-based data analysis.
        </p>
      </section>

      <section className="projects-layout">
        <div className="featured-project glass-card">
          <p className="card-mini-tag">Featured Project</p>
          <h2>{featuredProject.title}</h2>
          <p className="project-duration">{featuredProject.duration}</p>
          <p className="project-place">{featuredProject.place}</p>

          <div className="project-points">
            {featuredProject.points.map((point, index) => (
              <div className="point-item" key={index}>
                <span>{index + 1}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/Adit2006-bit"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="side-projects">
          {sideProjects.map((project, index) => (
            <div className="side-project-card glass-card" key={index}>
              <p className="card-mini-tag">Project / Training</p>
              <h3>{project.title}</h3>
              <p className="project-duration">{project.duration}</p>
              <p className="project-place">{project.place}</p>

              <ul>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;