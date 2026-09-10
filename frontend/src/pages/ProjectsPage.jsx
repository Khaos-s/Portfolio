import ProjectCard from '../components/projects/ProjectCard';
import ProjectReel from '../components/projects/ProjectReel';
import SectionHeading from '../components/sections/SectionHeading';
import { projects } from '../content/portfolio';
import useSeo from '../lib/seo';

export default function ProjectsPage() {
  useSeo('Projects', 'Project case studies and project frameworks by John Arvy Lopez.');
  return <div className="page"><div className="container detail-hero"><p className="eyebrow">Work archive</p><h1>Explore the project collection.</h1><p className="detail-lead">The current project data came from the original prototype and is labelled as a framework until its real links, screenshots, contribution, and outcomes are provided.</p></div><ProjectReel projects={projects} /><section className="container section"><SectionHeading eyebrow="All projects" title="Browse by project, not by decoration.">Each card leads to a structured case-study page ready for real project evidence.</SectionHeading><div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></section></div>;
}
