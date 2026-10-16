export default function ProjectCover({ logo, screenshot, title }) {
  const image = screenshot || logo;
  return (
    <div className={`project-cover ${image ? 'project-image-cover' : 'project-type-cover'}${screenshot ? ' project-screenshot-cover' : ''}`}>
      {image ? <img src={image} alt={`${title} ${screenshot ? 'homepage screenshot' : 'project preview'}`} loading="lazy" decoding="async" width="640" height="400" /> : <span className="cover-title">{title}</span>}
    </div>
  );
}
