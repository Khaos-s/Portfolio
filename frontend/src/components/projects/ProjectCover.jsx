export default function ProjectCover({ logo, title }) {
  if (logo) {
    return <div className="project-cover project-logo-cover"><img src={logo} alt={`${title} logo`} /></div>;
  }

  return <div className="project-cover project-placeholder" aria-label="Project placeholder" />;
}
