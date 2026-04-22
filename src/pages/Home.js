import React from "react";
import "./Home.css";

function Home() {
  const education = [
    {
      id: 1,
      title: "Mahindra École Centrale",
      score: "CGPA: 5.69 / 10",
      subtitle: "B.Tech (Integrated CSE) • Aug 2023 – Present",
      details:
        "Relevant coursework: Data Structures & Algorithms, Machine Learning, Natural Language Processing"
    },
    {
      id: 2,
      title: "Excellencia Junior College",
      score: "95.5%",
      subtitle: "Intermediate • Jun 2021 – May 2023",
      details: "Secunderabad"
    },
    {
      id: 3,
      title: "Birla Open Minds International School",
      score: "75.8%",
      subtitle: "10th Grade (CBSE) • Jun 2020 – May 2021",
      details: "Kollur"
    }
  ];

  const skills = ["C", "Python", "Java", "MySQL"];
  const interests = [
    "Cricket",
    "Badminton",
    "Pickleball",
    "Cooking",
    "Nutrition Science",
    "Strength Training",
    "Blood Donation",
    "Cleanliness Drives"
  ];

  return (
    <div className="portfolio-page">
      <section className="hero-section">
        <div className="hero-text">
          <p className="hero-tag">Portfolio</p>
          <h1>
            Naredla <span>Adit Reddy</span>
          </h1>
          <p className="hero-subtitle">
            Computer Science student at Mahindra École Centrale, building
            practical software solutions and strengthening skills in
            programming, machine learning, and problem solving.
          </p>

          <div className="contact-row">
            <div className="contact-pill">📧 aditreddy6@gmail.com</div>
            <div className="contact-pill">🎓 se23umcs043@mahindrauniversity.edu.in</div>
            <div className="contact-pill">📞 +91 9963704527</div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">Academic Timeline</h2>

        <div className="timeline-list">
          {education.map((item) => (
            <div className="timeline-card" key={item.id}>
              <div className="timeline-number">{item.id}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="score-line">{item.score}</p>
                <p className="subtitle-line">{item.subtitle}</p>
                <p className="detail-line">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">Core Competencies</h2>
        <div className="chip-wrap">
          {skills.map((skill, index) => (
            <span className="skill-chip" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">Focus & Interests</h2>
        <div className="chip-wrap">
          {interests.map((item, index) => (
            <span className="interest-chip" key={index}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-block about-card">
        <h2 className="section-title">About Me</h2>
        <p>
          I am a B.Tech Integrated CSE student currently studying at Mahindra
          École Centrale. My academic journey has helped me build a foundation
          in data structures, algorithms, machine learning, and natural language
          processing.
        </p>
        <p>
          I am interested in applying programming skills to practical projects,
          improving my software development ability, and continuously learning
          through hands-on work and training.
        </p>
      </section>
    </div>
  );
}

export default Home;