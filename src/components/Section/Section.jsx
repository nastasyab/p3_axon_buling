import "./Section.css";

export function Section({ title, text, children }) {
  return (
    <section className="section">
      {title && <h2 className="section-title">{title}</h2>}
      {text && <p className="section-text">{text}</p>}
      {children}
    </section>
  );
}
