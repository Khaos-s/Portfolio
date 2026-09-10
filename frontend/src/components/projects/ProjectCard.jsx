import { Link } from 'react-router-dom';
import ProjectCover from './ProjectCover';

export default function ProjectCard({ project }) {
  return <article className="project-card"><ProjectCover logo={project.logo} title={project.title} /><div className="project-card-copy"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p>{project.summary}</p>{project.technologies.length > 0 && <div className="tag-row">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>}<div className="project-links"><Link className="text-link" to={`/projects/${project.slug}`}>Case study →</Link>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site ↗</a>}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Code ↗</a>}</div></div></article>;
}
