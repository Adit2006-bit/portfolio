import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      <h1>Your Name</h1>

      <section>
        <h2>About Me</h2>
        <p>
          I am a student interested in web development, software engineering,
          and building useful applications.
        </p>
      </section>

      <section>
        <h2>Research Interests</h2>
        <p>
          My interests include web technologies, machine learning, data science,
          and software architecture.
        </p>
      </section>

      <section>
        <h2>Personal Details</h2>
        <p><strong>Phone:</strong> 9876543210</p>
        <p><strong>Personal Email:</strong> yourname@gmail.com</p>
        <p><strong>College Email:</strong> yourname@college.edu</p>
        <p><strong>Skills:</strong> HTML, CSS, JavaScript, React, Python</p>
      </section>

    </div>
  );
}

export default Home;