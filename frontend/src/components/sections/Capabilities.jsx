import { skillGroups } from '../../content/portfolio';
import useReveal from '../../lib/useReveal';

export default function Capabilities() {
  const revealRef = useReveal();
  return (
    <div className="capability-list" ref={revealRef}>
      {skillGroups.map((group, index) => (
        <details className="capability" key={group.title} open={index === 0}>
          <summary><span>{group.title}</span><span className="capability-toggle" aria-hidden="true">+</span></summary>
          <div className="capability-content">
            <p>{group.description}</p>
            <div className="tag-row">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
          </div>
        </details>
      ))}
    </div>
  );
}

