import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Movie Sentiment Analysis",
      duration: "Sep 2025 – Nov 2025",
      place: "Mahindra École Centrale, Bahadurpally",
      description: [
        "Built understanding of how computers process and interpret human language.",
        "Worked with text preprocessing techniques such as tokenization, stop word removal, stemming, and lemmatization.",
        "Learned sentiment classification methods for textual data."
      ],
      github: "https://github.com/Adit2006-bit"
    },
    {
      title: "Forestry Management",
      duration: "Nov 2025 – Dec 2025",
      place: "Mahindra École Centrale, Bahadurpally",
      description: [
        "Applied OOPS principles including Encapsulation, Abstraction, Inheritance, and Polymorphism.",
        "Improved problem-solving and logical reasoning through implementation.",
        "Gained experience designing a real-world application using OOPS concepts."
      ],
      github: "https://github.com/Adit2006-bit"
    },
    {
      title: "Python Programming Training",
      duration: "Dec 2024 – Feb 2025",
      place: "Internshala",
      description: [
        "Worked with NumPy, Pandas, and Matplotlib.",
        "Improved logical thinking and problem-solving through practice."
      ],
      github: "https://github.com/Adit2006-bit"
    }
  ];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <p className="projects-tag">My Work</p>
        <h1>Projects & Training</h1>
        <p>
          A summary of academic projects and technical training completed during
          my learning journey.
        </p>
      </section>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p className="project-meta">{project.duration}</p>
            <p className="project-place">{project.place}</p>

            <ul>
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <a href={project.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;