import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using React.",
      github: "https://github.com/your-username/project1"
    },
    {
      title: "Student Management System",
      description: "A project to manage student records and details.",
      github: "https://github.com/your-username/project2"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "15px 0",
            borderRadius: "10px"
          }}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noreferrer">
            View GitHub Repository
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;