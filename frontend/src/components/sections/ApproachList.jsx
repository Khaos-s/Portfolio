import { approach } from '../../content/portfolio';
import useReveal from '../../lib/useReveal';

export default function ApproachList() {
  const revealRef = useReveal(100);
  return (
    <ol className="approach-list" ref={revealRef}>
      {approach.map((item) => (
        <li key={item.title}>
          <div><h3>{item.title}</h3><p>{item.description}</p></div>
        </li>
      ))}
    </ol>
  );
}

