import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Aaron Ace Domingo</h1>
        <p>Procurement Staff & Data Encoder | Efficiency & Process Optimization</p>
      </div>
    </header>
  );
}

function Overview() {
  return (
    <section className="overview">
      <div className="container">
        <h2>Professional Overview</h2>
        <p>
          I am a Procurement Staff and Data Encoder with extensive experience in managing procurement processes, vendor relations, and data organization at the Local Government Unit of Guimba, Nueva Ecija. I have successfully contributed to various projects, ensuring timely delivery of goods and services while maintaining a strong focus on cost efficiency and data accuracy.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2>Key Skills & Achievements</h2>
        <ul>
          <li><strong>Cost Efficiency:</strong> Negotiated supplier contracts, reducing procurement costs by 15%.</li>
          <li><strong>Process Optimization:</strong> Implemented a new data tracking system, reducing errors by 20% and speeding up report generation.</li>
          <li><strong>Reporting & Analytics:</strong> Developed reports that enhanced decision-making for key projects.</li>
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2>Notable Projects</h2>
        <ul>
          <li><strong>Local Infrastructure Project:</strong> Assisted in the procurement of materials, ensuring project timelines were met and cost-effective materials were used.</li>
          <li><strong>Health Initiative Data Management:</strong> Organized and managed data for a government health program, streamlining reporting processes.</li>
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="education">
      <div className="container">
        <h2>Education</h2>
        <p><strong>BS in Information and Technology</strong> - [Our Lady of the Sacred Heart College of Guimba, Inc.], [2018]</p>
        <p>Focused on procurement management, data analytics, and organizational efficiency.</p>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="certifications">
      <div className="container">
        <h2>See Projects</h2>
        <ul>
          <li><strong>Data Entry & Management Certification</strong> - [Year]</li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <p>If you'd like to learn more or discuss potential opportunities, feel free to reach out. I'd love to connect with you!</p>
        <a href="mailto:your-email@example.com" className="email-link">Contact Me</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Aaron Ace Domingo - Procurement Staff & Data Encoder Portfolio</p>
      </div>
    </footer>
  );
}

export default App;
