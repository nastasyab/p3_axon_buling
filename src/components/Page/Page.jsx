import "./Page.css";

export function Page({ title, intro, children }) {
  return (
    <main className="page">
      <div className="page-container">
        {(title || intro) && (
          <header className="page-header">
            {title && <h1 className="page-title">{title}</h1>}
            {intro && <p className="page-intro">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </main>
  );
}
