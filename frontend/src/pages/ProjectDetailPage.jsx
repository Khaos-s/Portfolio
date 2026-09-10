import { Link, useParams } from 'react-router-dom';
import { projects } from '../content/portfolio';
import useSeo from '../lib/seo';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  useSeo(project?.title || 'Project not found', 'Portfolio project details.');

  if (!project) {
    return (
      <div className="page not-found">
        <div>
          <p className="eyebrow">404</p>
          <h1>That project is not here.</h1>
          <Link className="button button-primary" to="/projects" style={{ marginTop: '2rem' }}>
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ── CINEMATIC BANNER ────────────────────────── */}
      <div className="detail-banner" data-cover={project.cover}>
        <div className="detail-banner-inner">
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p className="detail-lead">{project.summary}</p>
        </div>
      </div>

      {/* ── BODY ────────────────────────────────────── */}
      <div className="detail-body">
        <div className="detail-body-inner">
          <div className="detail-grid">
            {/* Main article */}
            <article>
              <p className="notice">{project.outcome}</p>
              <h2>The challenge</h2>
              <p>{project.challenge}</p>
              <h2>The approach</h2>
              <p>{project.solution}</p>
              <h2>Contributions</h2>
              <ul>
                {project.contributions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>

            {/* Sidebar */}
            <aside className="detail-aside">
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Technology</dt>
                  <dd>
                    <div className="tag-row">
                      {project.technologies.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </dd>
                </div>
                <div>
                  <dt>Links</dt>
                  <dd>
                    {project.liveUrl || project.repoUrl ? (
                      <div className="project-links">
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site ↗</a>}
                        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Code ↗</a>}
                      </div>
                    ) : (
                      'Add verified URLs before publishing.'
                    )}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link className="text-link" to="/projects">← Return to all projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
