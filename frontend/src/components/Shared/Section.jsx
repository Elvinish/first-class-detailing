import "./Section.css";

export default function Section({ id, eyebrow, title, kicker, children }) {
  return (
    <section id={id} className="section">
      <div className="section__inner">
        {(eyebrow || title || kicker) && (
          <header className="section__header">
            {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
            {title && <h2 className="section__title">{title}</h2>}
            {kicker && <p className="section__kicker">{kicker}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
