import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';
import ProjectCover from './ProjectCover';
import '../../styles/project-stack.css';

const clamp = (value) => Math.max(0, Math.min(1, value));

export default function ProjectStack({ projects }) {
  const stackRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    const rows = Array.from(stack.children);
    const cards = rows.map((row) => row.querySelector('.project-stack-card'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 701px) and (min-height: 620px)');
    let frame = null;

    const update = () => {
      frame = null;
      const animated = desktop.matches && !reducedMotion.matches;
      const positions = animated ? rows.map((row) => ({
        top: row.getBoundingClientRect().top,
        pin: parseFloat(window.getComputedStyle(row).top),
        height: row.offsetHeight,
      })) : [];

      cards.forEach((card, index) => {
        const covered = positions.slice(index + 1).reduce((sum, row) => (
          sum + clamp(1 - (row.top - row.pin) / row.height)
        ), 0);
        const scale = Math.max(.82, 1 - covered * .035);
        const transform = animated ? `scale(${scale})` : 'none';
        if (card.style.transform !== transform) card.style.transform = transform;
      });
    };

    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    const resize = new ResizeObserver(schedule);
    resize.observe(stack);
    rows.forEach((row) => resize.observe(row));
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reducedMotion.addEventListener('change', schedule);
    desktop.addEventListener('change', schedule);
    schedule();

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reducedMotion.removeEventListener('change', schedule);
      desktop.removeEventListener('change', schedule);
    };
  }, [projects]);

  const revealFocusedProject = (event, index) => {
    if (!event.target.matches(':focus-visible') || window.getComputedStyle(event.currentTarget).position !== 'sticky') return;
    const stack = stackRef.current;
    const rows = Array.from(stack.children);
    const gap = parseFloat(window.getComputedStyle(stack).rowGap);
    const before = rows.slice(0, index).reduce((sum, row) => sum + row.offsetHeight + gap, 0);
    const pin = parseFloat(window.getComputedStyle(event.currentTarget).top);
    // Uncover an earlier card immediately when keyboard focus returns to its links.
    window.scrollTo({ top: stack.getBoundingClientRect().top + window.scrollY + before - pin, behavior: 'instant' });
  };

  return (
    <ol className="project-stack" ref={stackRef} aria-label="Featured projects">
      {projects.map((project, index) => (
        <li
          className="project-stack-step"
          key={project.slug}
          style={{ '--stack-index': index, zIndex: index + 1 }}
          onFocusCapture={(event) => revealFocusedProject(event, index)}
        >
          <article className={`project-stack-card project-stack-tone-${index % 5}`} aria-labelledby={`stack-${project.slug}`}>
            <div className="project-stack-copy">
              <p className="project-stack-meta">
                <span>{project.category === 'design' ? 'Interface design' : 'Web application'}</span>
                {project.technologies.length > 0 && <span>{project.technologies.slice(0, 2).join(' / ')}</span>}
              </p>
              <div className="project-stack-story">
                <h3 id={`stack-${project.slug}`}>{project.title}</h3>
                <p className="project-stack-type">{project.type}</p>
                <p className="project-stack-summary">{project.summary}</p>
              </div>
              <div className="project-stack-actions">
                <Button asChild><Link to={`/projects/${project.slug}`}>View project <ArrowUpRight size={17} aria-hidden="true" /></Link></Button>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site ↗<span className="sr-only"> (new tab)</span></a>}
                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Source ↗<span className="sr-only"> (new tab)</span></a>}
              </div>
            </div>
            <Link className="project-stack-media" to={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
              <ProjectCover logo={project.logo} screenshot={project.screenshot} title={project.title} />
            </Link>
          </article>
        </li>
      ))}
    </ol>
  );
}
