'use client';

import { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="background-glow" aria-hidden="true" />
      <header className="site-header">
        <a href="#home" className="logo">
          Alex<span>Nova</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          ☰
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="home">
        <section className="hero section">
          <p className="eyebrow">Web • Mobile • AI/ML • Education</p>
          <h1>
            Building meaningful digital products and inspiring learners in{' '}
            <span>Math &amp; Science</span>.
          </h1>
          <p className="lead">
            I’m Alex Nova, a multidisciplinary developer and educator focused on creating smart
            applications, shipping mobile experiences, and teaching STEM with clarity and passion.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Hire / Collaborate
            </a>
          </div>
          <div className="hero-cards">
            <article>
              <h3>5+ Years</h3>
              <p>Shipping full-stack web &amp; mobile products.</p>
            </article>
            <article>
              <h3>AI/ML Focus</h3>
              <p>From model experimentation to real-world integration.</p>
            </article>
            <article>
              <h3>Teacher</h3>
              <p>Mentoring students in math, science, and coding fundamentals.</p>
            </article>
          </div>
        </section>

        <section id="about" className="section split">
          <div>
            <h2>About Me</h2>
            <p>
              I blend engineering discipline with educator empathy. Whether I’m architecting a web
              platform, refining a mobile flow, or training an ML model, I care about solutions
              that are intuitive, efficient, and impactful.
            </p>
            <p>
              In the classroom, I turn complex topics into practical concepts, helping students
              connect equations and scientific thinking to problem-solving in everyday life.
            </p>
          </div>
          <aside className="highlight">
            <h3>Core Strengths</h3>
            <ul>
              <li>Human-centered UI/UX implementation</li>
              <li>Scalable APIs and cross-platform mobile apps</li>
              <li>Applied AI/ML with measurable outcomes</li>
              <li>Engaging, structured STEM teaching</li>
            </ul>
          </aside>
        </section>

        <section id="skills" className="section">
          <h2>Skills Snapshot</h2>
          <div className="skills-grid">
            <article>
              <h3>Web Development</h3>
              <p>React, Next.js, TypeScript, Node.js, REST/GraphQL, PostgreSQL</p>
            </article>
            <article>
              <h3>Mobile Development</h3>
              <p>Flutter, React Native, Android fundamentals, mobile-first UX</p>
            </article>
            <article>
              <h3>AI / Machine Learning</h3>
              <p>Python, TensorFlow, scikit-learn, NLP, model deployment basics</p>
            </article>
            <article>
              <h3>Teaching &amp; Mentorship</h3>
              <p>Lesson design, student coaching, exam prep in mathematics and science</p>
            </article>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience Timeline</h2>
          <div className="timeline">
            <article>
              <span>2023 — Present</span>
              <h3>Senior Web &amp; AI Engineer</h3>
              <p>
                Leading full-stack and ML-powered product features for data-driven customer
                experiences.
              </p>
            </article>
            <article>
              <span>2021 — 2023</span>
              <h3>Mobile App Developer</h3>
              <p>
                Built and launched production mobile apps with high performance and strong user
                retention.
              </p>
            </article>
            <article>
              <span>2019 — Present</span>
              <h3>Math &amp; Science Teacher</h3>
              <p>
                Teaching high school and early college learners through interactive classes and
                practical labs.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Selected Projects</h2>
          <div className="project-grid">
            <article>
              <h3>SmartTutor AI</h3>
              <p>
                Adaptive learning assistant that personalizes math problem sets and provides
                instant feedback.
              </p>
            </article>
            <article>
              <h3>FitTrack Mobile</h3>
              <p>
                Cross-platform health tracker with intuitive analytics and habit streak insights.
              </p>
            </article>
            <article>
              <h3>EduLab Web Portal</h3>
              <p>
                STEM-focused learning portal integrating assignments, quizzes, and classroom
                analytics.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Let’s Build &amp; Teach Something Great</h2>
          <p>
            Open to freelance opportunities, product collaborations, and teaching engagements.
          </p>
          <a className="btn btn-primary" href="mailto:alex.nova@example.com">
            alex.nova@example.com
          </a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Alex Nova — Portfolio CV</p>
      </footer>
    </>
  );
}
