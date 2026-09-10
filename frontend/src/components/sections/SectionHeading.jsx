export default function SectionHeading({ eyebrow, title, children }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p>{title && <h2>{title}</h2>}{children && <p>{children}</p>}</div>;
}
