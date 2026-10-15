import { useState } from 'react';
import SectionHeading from './SectionHeading';
import ExperienceGallery from './ExperienceGallery';
import AchievementsSection from './AchievementsSection';
import { experienceChapters, experienceGallery, achievements } from '../../content/portfolio';

const chapters = [
  { id: 'work', label: 'Work & Projects' },
  { id: 'education', label: 'Education' },
  { id: 'community', label: 'Community' },
];

export default function ExperienceSection() {
  const [activeChapter, setActiveChapter] = useState('work');

  const { work, education, community } = experienceChapters;

  return (
    <section id="experience" className="section experience-section theme-dark" aria-labelledby="experience-title" tabIndex={-1}>
      <div className="container">
        {/* Section Topline */}
        <div className="section-topline">
          <SectionHeading
            title="Experience & learning"
            id="experience-title"
          >
            People, projects, and communities that have shaped how I work and build.
          </SectionHeading>
          <span className="experience-topline-note">A growing practice in tech, design &amp; collaboration.</span>
        </div>

        {/* Experience Explorer: Chapter Rail + Content */}
        <div className="experience-explorer">
          <nav className="experience-rail" aria-label="Experience chapters">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                type="button"
                className={`experience-rail-btn ${activeChapter === ch.id ? 'is-active' : ''}`}
                onClick={() => setActiveChapter(ch.id)}
                aria-pressed={activeChapter === ch.id}
              >
                <span className="rail-btn-label">{ch.label}</span>
              </button>
            ))}
          </nav>

          <div className="experience-detail-panel">
            {activeChapter === 'work' && (
              <article className="experience-card work-card">
                <h3 className="experience-card-title">{work.role}</h3>
                <div className="experience-card-meta">
                  <span className="experience-period">{work.period}</span>
                </div>
                <p className="experience-card-subtitle">{work.subtitle}</p>
                <p className="experience-card-desc">{work.description}</p>

                {work.highlights && work.highlights.length > 0 && (
                  <ul className="experience-highlights">
                    {work.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                <div className="tag-row">
                  {work.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            )}

            {activeChapter === 'education' && (
              <div className="education-list">
                {education.map((item, idx) => (
                  <article key={idx} className="experience-card education-card">
                    <div className="experience-card-meta">
                      <span className="experience-period">{item.period}</span>
                      <span className="experience-badge">{item.degree}</span>
                    </div>
                    <h3 className="experience-card-title">{item.school}</h3>
                    <p className="experience-card-subtitle">{item.program}</p>
                    <p className="experience-location-tag">
                      <span aria-hidden="true">↳ </span>{item.location}
                    </p>
                    {item.note && <p className="experience-card-desc">{item.note}</p>}
                  </article>
                ))}
              </div>
            )}

            {activeChapter === 'community' && (
              <article className="experience-card community-card">
                <div className="experience-card-meta">
                  <span className="experience-period">{community.period}</span>
                  <span className="experience-badge">Student Chapter</span>
                </div>
                <h3 className="experience-card-title">{community.organization}</h3>
                <p className="experience-card-subtitle">{community.role}</p>
                <p className="experience-card-desc">{community.description}</p>
                <div className="tag-row">
                  {community.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            )}
          </div>
        </div>

        {/* The Gallery Part */}
        <ExperienceGallery slides={experienceGallery} />

        {/* The Achievements Part (Empty state ready for user manual updates) */}
        {achievements.length > 0 && <AchievementsSection achievements={achievements} />}
      </div>
    </section>
  );
}
