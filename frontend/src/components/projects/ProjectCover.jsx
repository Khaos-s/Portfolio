export default function ProjectCover({ logo, title }) {
  return (
    <div className={`project-cover ${logo ? 'project-image-cover' : 'project-type-cover'}`}>
      {logo ? <img src={logo} alt={`${title} project preview`} loading="lazy" width="640" height="400" /> : <span className="cover-title">{title}</span>}
    </div>
  );
}
