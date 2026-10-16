import { Link } from 'react-router-dom';
import ProjectCover from './ProjectCover';
import useReveal from '../../lib/useReveal';

export default function ProjectCard({ project, featured = false, index }) {
  const revealRef = useReveal((index ?? 0) % 3 * 90);
  return (
    <article ref={revealRef} className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <Link className="project-cover-link" to={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        <ProjectCover logo={project.logo} screenshot={project.screenshot} title={project.title} />
        <span className="project-open" aria-hidden="true">↗</span>
      </Link>
      <div className="project-card-copy">
        <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p className="project-kind">{project.type}</p>
        <p>{project.summary}</p>
        {project.technologies.length > 0 && <div className="tag-row">{project.technologies.slice(0, 4).map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>}
        <div className="project-links">
          <Link className="text-link" to={`/projects/${project.slug}`}>Explore project <span aria-hidden="true">↗</span></Link>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site ↗<span className="sr-only"> (new tab)</span></a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Source ↗<span className="sr-only"> (new tab)</span></a>}
        </div>
      </div>
    </article>
  );
}

