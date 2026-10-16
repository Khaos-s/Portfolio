import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ExperienceGallery from './ExperienceGallery';
import AchievementsSection from './AchievementsSection';
import { experienceRoadmap, experienceGallery, achievements, projects } from '../../content/portfolio';
import useReveal from '../../lib/useReveal';

function RoadmapMilestone({ milestone }) {
  const revealRef = useReveal();
  return (
    <li className={`roadmap-milestone${milestone.current ? ' is-current' : ''}`} aria-current={milestone.current ? 'step' : undefined}>
      <article className="roadmap-entry" ref={revealRef}>
        <div className="roadmap-year"><span>{milestone.year}</span><span>College</span></div>
        <div className="roadmap-copy">
          <h3>{milestone.title}</h3>
          {milestone.current && <p className="roadmap-current">Current</p>}
          <p className="roadmap-description">{milestone.description}</p>
          {milestone.projectSlugs.length > 0 && (
            <ul className="roadmap-projects" aria-label={`${milestone.year} projects`}>
              {milestone.projectSlugs.map((slug) => {
                const project = projects.find((item) => item.slug === slug);
                return <li key={slug}><Link to={`/projects/${slug}`}>{project.title}<ArrowUpRight size={16} aria-hidden="true" /></Link></li>;
              })}
            </ul>
          )}
        </div>
      </article>
    </li>
  );
}

export default function ExperienceSection() {
  const revealRef = useReveal();
  return (
    <section id="experience" className="section experience-section theme-dark" aria-labelledby="experience-title" tabIndex={-1}>
      <div className="container">
        <div className="experience-journey">
          <div className="experience-intro" ref={revealRef}>
            <h2 id="experience-title">My developer<br />journey</h2>
            <p>Four college years. A growing collection of ideas turned into working interfaces and applications.</p>
            <p className="experience-now">Currently a fourth-year BS IT student.</p>
            <Link className="text-link" to="/projects">Explore the projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <ol className="experience-roadmap" role="list" aria-label="College development journey">
            {experienceRoadmap.map((milestone) => <RoadmapMilestone key={milestone.id} milestone={milestone} />)}
          </ol>
        </div>

        <ExperienceGallery slides={experienceGallery} />
        {achievements.length > 0 && <AchievementsSection achievements={achievements} />}
      </div>
    </section>
  );
}
