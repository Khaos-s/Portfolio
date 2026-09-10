import { Link } from 'react-router-dom';
import portrait from '../assets/images/hero-profile.png';
import ProjectReel from '../components/projects/ProjectReel';
import SectionHeading from '../components/sections/SectionHeading';
import { projects, skillGroups, timeline } from '../content/portfolio';
import useSeo from '../lib/seo';

export default function HomePage() {
  useSeo('John Arvy Lopez — Frontend Developer', 'Portfolio of John Arvy Lopez, a frontend developer based in Manila, Philippines.');
  const breedSmartProject = projects.find((project) => project.slug === 'breedsmart-oton');
  const otherFeaturedProjects = projects.filter((project) => project.featured && project.slug !== 'breedsmart-oton');
  const featuredProjects = breedSmartProject
    ? [...otherFeaturedProjects.slice(0, Math.ceil(otherFeaturedProjects.length / 2)), breedSmartProject, ...otherFeaturedProjects.slice(Math.ceil(otherFeaturedProjects.length / 2))]
    : otherFeaturedProjects;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="animated-greeting" aria-label="Hi, I’m John Arvy Lopez">
              <span className="greeting-line greeting-intro">Hi, I’M</span>
              <span className="greeting-line greeting-name">John Arvy Lopez</span>
            </h1>
            <div className="hero-actions">
              <Link className="button button-primary" to="/projects">Projects</Link>
              <a className="button button-secondary" href="https://github.com/Khaos-s" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>

          {/* Portrait */}
          <figure className="portrait-frame">
            <img src={portrait} alt="John Arvy Lopez" />
          </figure>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Projects" />
        </div>
        <ProjectReel projects={featuredProjects} initialProjectSlug="breedsmart-oton" />
      </section>

      {/* ── SKILLS & TIMELINE ────────────────────────────── */}
      <section className="section">
        <div className="container split-grid">
          <div>
            <SectionHeading eyebrow="What I build" title="A frontend-first toolkit.">
              Skills communicate what I work with; projects demonstrate depth more credibly than percentage bars.
            </SectionHeading>
            <div className="skill-list">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tag-row">
                    {group.skills.map((skill) => (
                      <span className="tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Journey" title="The context behind the work.">
              Experience, education, and the milestones that shaped my approach to frontend development.
            </SectionHeading>
            <div className="timeline">
              {timeline.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <span className="timeline-meta">{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link className="text-link" to="/resume">View full profile →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Let's connect</p>
              <h2>Have a project in mind?</h2>
              <p>I'm open to discussing frontend work, UI implementation, and web application ideas.</p>
            </div>
            <div>
              <p className="muted">
                Use the contact form to share a little context. I'll get back to you as soon as possible.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link className="button button-primary" to="/contact">Send a message</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
