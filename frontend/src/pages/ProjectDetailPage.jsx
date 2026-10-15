import { Link, useParams } from 'react-router-dom';
import { projects } from '../content/portfolio';
import useSeo from '../lib/seo';
import Button from '../components/ui/Button';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  useSeo(project?.title || 'Project not found', project?.summary || 'Portfolio project details.');
  if (!project) return <div className="page not-found"><div><h1>Project not found.</h1><Button asChild><Link to="/projects">Back to projects</Link></Button></div></div>;
  return (
    <>
      <section className="detail-banner">
        <div className="detail-banner-inner">
          <Link className="back-link" to="/projects">← All projects</Link>
          <p className="eyebrow">{project.type}</p><h1>{project.title}</h1><p className="detail-lead">{project.summary}</p>
        </div>
      </section>
      <div className="detail-body"><div className="detail-body-inner">
        {project.logo && <figure className="detail-preview"><img src={project.logo} alt={`${project.title} project preview`} /></figure>}
        <div className="detail-grid">
          <article>
            {project.outcome && <><h2>Project overview</h2><p>{project.outcome}</p></>}
            {project.challenge && <><h2>The challenge</h2><p>{project.challenge}</p></>}
            {project.solution && <><h2>The approach</h2><p>{project.solution}</p></>}
            {project.contributions.length > 0 && <><h2>Contributions</h2><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></>}
            {!project.outcome && !project.challenge && <><h2>Explore the application</h2><p>Visit the live site to explore {project.title}.</p></>}
          </article>
          <aside className="detail-aside" aria-label="Project information">
            <dl>
              <div><dt>Project type</dt><dd>{project.type}</dd></div>
              {project.role && <div><dt>My role</dt><dd>{project.role}</dd></div>}
              {project.technologies.length > 0 && <div><dt>Tools & technology</dt><dd><div className="tag-row">{project.technologies.map((item) => <span className="tag" key={item}>{item}</span>)}</div></dd></div>}
              {(project.liveUrl || project.repoUrl) && <div><dt>Explore</dt><dd><div className="project-links">
                {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live site ↗<span className="sr-only"> (new tab)</span></a>}
                {project.repoUrl && <a className="text-link" href={project.repoUrl} target="_blank" rel="noreferrer">Source code ↗<span className="sr-only"> (new tab)</span></a>}
              </div></dd></div>}
            </dl>
          </aside>
        </div>
        <div className="detail-bottom"><Link className="text-link" to="/projects">← Explore more work</Link><Link className="text-link" to="/#contact">Have something in mind? ↗</Link></div>
      </div></div>
    </>
  );
}
