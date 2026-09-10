import { Link } from 'react-router-dom';
import SectionHeading from '../components/sections/SectionHeading';
import { profile, skillGroups, timeline } from '../content/portfolio';
import useSeo from '../lib/seo';

export default function ResumePage() {
  useSeo('About', `Professional profile for ${profile.name}.`);
  return <div className="page"><div className="container resume-hero"><p className="eyebrow">About</p><h1>{profile.name}</h1><p className="detail-lead">{profile.about}</p><p className="notice">A downloadable résumé is intentionally not linked yet because the supplied project does not include one. Add a current, public PDF to <code>public/resume.pdf</code> when ready.</p></div><section className="container section split-grid"><div><SectionHeading eyebrow="Education & experience" title="Add the evidence behind the title.">Avoid inventing credentials: this section is prepared from the reference content and needs your verified school, dates, experience, and achievements.</SectionHeading><div className="timeline">{timeline.map((item) => <article className="timeline-item" key={item.title}><span className="timeline-meta">{item.meta}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div><div><SectionHeading eyebrow="Capabilities" title="Tools I use to ship interfaces.">The public list stays concise and points visitors back to project evidence.</SectionHeading><div className="skill-list">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="tag-row">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></div>)}</div><Link className="text-link" to="/projects">See project work →</Link></div></section></div>;
}
