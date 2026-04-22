import React from "react";
import "./Home.css";

function Home() {
  const highlights = [
    "B.Tech Integrated CSE student at Mahindra École Centrale",
    "Coursework in DSA, Machine Learning, and NLP",
    "Built sentiment analysis and OOPS-based academic projects",
    "Hands-on exposure to Python, Java, C, and MySQL"
  ];

  const education = [
    {
      year: "2023 - Present",
      title: "Mahindra École Centrale",
      subtitle: "B.Tech (Integrated CSE)",
      meta: "CGPA: 5.69 / 10",
      details:
        "Relevant coursework includes Data Structures & Algorithms, Machine Learning, and Natural Language Processing."
    },
    {
      year: "2021 - 2023",
      title: "Excellencia Junior College",
      subtitle: "Intermediate",
      meta: "95.5%",
      details: "Completed intermediate education with strong academic performance."
    },
    {
      year: "2020 - 2021",
      title: "Birla Open Minds International School",
      subtitle: "10th Grade (CBSE)",
      meta: "75.8%",
      details: "Built academic foundations and developed long-term interest in technology."
    }
  ];

  const skillGroups = [
    {
      title: "Programming",
      items: ["C", "Python", "Java"]
    },
    {
      title: "Database",
      items: ["MySQL"]
    },
    {
      title: "Learning Areas",
      items: ["Machine Learning", "Natural Language Processing", "Data Structures"]
    }
  ];

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
    <div className="home-page">
      <section className="hero-grid">
        <div className="hero-left glass-card">
          <p className="eyebrow">Hello, I’m</p>
          <h1>
            Naredla <span>Adit Reddy</span>
          </h1>
          <p className="hero-text">
            A Computer Science student focused on building practical solutions
            through programming, structured problem solving, and continuous
            learning in software and data-driven domains.
          </p>

          <div className="hero-actions">
            <a href="mailto:aditreddy6@gmail.com" className="primary-btn">
              Email Me
            </a>
            <a href="#education" className="secondary-btn">
              View Education
            </a>
          </div>

          <div className="contact-strip">
            <div className="contact-box">
              <span>Personal Email</span>
              <strong>aditreddy6@gmail.com</strong>
            </div>
            <div className="contact-box">
              <span>College Email</span>
              <strong>se23umcs043@mahindrauniversity.edu.in</strong>
            </div>
            <div className="contact-box">
              <span>Phone</span>
              <strong>+91 9963704527</strong>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-panel glass-card">
            <p className="card-label">Quick Profile</p>
            <h3>Mahindra École Centrale</h3>
            <p className="profile-role">B.Tech Integrated CSE • 2023 - Present</p>

            <div className="profile-stats">
              <div>
                <span>CGPA</span>
                <strong>5.69 / 10</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Hyderabad</strong>
              </div>
            </div>

            <div className="mini-divider"></div>

            <p className="card-label">Address</p>
            <p className="profile-address">
              Room No., Block - 243, Phase - 2, Mahindra École Centrale,
              Bahadurpally, Hyderabad - 500043, Telangana, India
            </p>
          </div>

          <div className="highlight-panel glass-card">
            <p className="card-label">Highlights</p>
            <div className="highlight-list">
              {highlights.map((item, index) => (
                <div className="highlight-item" key={index}>
                  <span className="highlight-index">0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap glass-card">
        <div className="section-head">
          <p className="section-tag">About</p>
          <h2>Profile Summary</h2>
        </div>
        <p className="summary-text">
          I am currently pursuing B.Tech Integrated CSE at Mahindra École
          Centrale. My academic path has introduced me to programming,
          algorithms, machine learning, and natural language processing. I enjoy
          learning through implementation and applying concepts in academic
          projects that improve both technical understanding and practical
          problem-solving ability.
        </p>
      </section>

      <section className="section-wrap" id="education">
        <div className="section-head">
          <p className="section-tag">Education</p>
          <h2>Academic Journey</h2>
        </div>

        <div className="vertical-timeline">
          {education.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-card glass-card">
                <h3>{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                <p className="timeline-meta">{item.meta}</p>
                <p className="timeline-details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-layout">
        <div className="skills-main glass-card">
          <div className="section-head">
            <p className="section-tag">Skills</p>
            <h2>Core Competencies</h2>
          </div>

          <div className="skill-group-grid">
            {skillGroups.map((group, index) => (
              <div className="skill-group-card" key={index}>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item, i) => (
                    <span className="chip" key={i}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="interests-side glass-card">
          <div className="section-head small-head">
            <p className="section-tag">Interests</p>
            <h2>Focus Areas</h2>
          </div>

          <div className="interest-list">
            {interests.map((item, index) => (
              <span className="interest-pill" key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;