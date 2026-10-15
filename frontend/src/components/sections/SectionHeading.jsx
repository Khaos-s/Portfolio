import useReveal from '../../lib/useReveal';

export default function SectionHeading({ eyebrow, title, children, id }) {
  const revealRef = useReveal();
  return <div className="section-heading" ref={revealRef}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}{title && <h2 id={id}>{title}</h2>}{children && <p>{children}</p>}</div>;
}
