import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">AXON</span>
        <span className="footer-meta">
          © {new Date().getFullYear()} · Nastasya Buling
        </span>
      </div>
    </footer>
  );
}
