import "./LandingPage.css";
import { Button } from "../components/Button/Button";

export function LandingPage() {
  return (
    <div className="landing">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">AXON</h1>
          <p className="hero-subtitle">Verbindung, die man spürt</p>

          <Button to="/demo">
            Zum Shop
          </Button>
        </div>
      </section>

      {/* BLACK BAR */}
      <div className="divider" />

      {/* FEATURE SECTION */}
      <section className="feature">
        <div className="feature-container">

          {/* TEXT LEFT */}
          <div className="feature-text">
            <h2>
              ERHALTE ECHTZEIT-FEEDBACK VON <br />
              DEINEM KLETTERPARTNER. <br />
              AUCH, WENN DU IHN GERADE NICHT SIEHST.
            </h2>

            <div className="feature-buttons">
              <Button to="/technologie">
                Wie funktioniert AXON?
              </Button>

              <Button to="/demo">
                Probiere es aus
              </Button>
            </div>
          </div>

          {/* IMAGE RIGHT (PLACEHOLDER) */}
          <div className="feature-visual">
            <div className="image-placeholder">
              Produktvisual
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
