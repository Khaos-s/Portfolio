import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../content/portfolio';
import useSeo from '../lib/seo';

const filters = [
  { id: 'all', label: 'All projects' },
  { id: 'application', label: 'Applications' },
  { id: 'design', label: 'Interface design' },
];
export default function ProjectsPage() {
  useSeo('Projects', 'Web applications, practical tools, and interface design by John Arvy Lopez.');
  const [filter, setFilter] = useState('all');
  const visibleProjects = projects.filter((project) => filter === 'all' || project.category === filter);
  return (
    <div className="page theme-dark"><div className="container">
      <div className="page-heading"><Link className="back-link" to="/#work">← Back to selected projects</Link><p className="eyebrow">The project collection</p><h1>Ideas, explored.<br /><em>Projects, built.</em></h1><p className="detail-lead">A collection of web applications and interface experiments. Explore the thinking, the tools, and the finished work.</p></div>
      <div className="archive-toolbar">
        <div className="filter-list" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}<span>{item.id === 'all' ? projects.length : projects.filter((project) => project.category === item.id).length}</span></button>)}</div>
        <p className="result-count" role="status">{visibleProjects.length} projects</p>
      </div>
      <div className="project-grid">{visibleProjects.map((project, index) => <ProjectCard project={project} key={project.slug} index={index} />)}</div>
    </div></div>
  );
}

