import "./Page.css";
import { Footer } from "../Footer/Footer";

export function Page({
  title,
  intro,
  children,
  fullWidth = false,
}) {
  return (
    <div className="page-wrapper">
      <main className={`page ${fullWidth ? "page--full" : ""}`}>
        {fullWidth ? (
          children
        ) : (
          <div className="page-container">
            {(title || intro) && (
              <header className="page-header">
                {title && <h1 className="page-title">{title}</h1>}
                {intro && <p className="page-intro">{intro}</p>}
              </header>
            )}
            {children}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
