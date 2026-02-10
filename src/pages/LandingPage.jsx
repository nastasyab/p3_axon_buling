import "./LandingPage.css";
import { Button } from "../components/Button/Button";
import { Page } from "../components/Page/Page";
import landingImage from "../assets/landing_page_img.png";

export function LandingPage() {
  return (
    <Page>
      <div className="landing">
        {/* hero */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">AXON</h1>
            <p className="hero-subtitle">Verbindung, die man spürt</p>

            <Button to="https://www.garmin.com/de-DE/">Zum Shop</Button>
          </div>
        </section>

        {/* schwarzer Divider */}
        <div className="divider" />

        {/* features */}
        <section className="feature">
          <div className="feature-container">
            <div className="feature-text">
              <h2>
                ERHALTE ECHTZEIT-FEEDBACK VON <br />
                DEINEM KLETTERPARTNER. <br />
                AUCH, WENN DU IHN GERADE NICHT SIEHST.
              </h2>

              <div className="feature-buttons">
                <Button to="/technologie">Wie funktioniert AXON?</Button>
                <Button to="/demo">Probiere es aus</Button>
              </div>
            </div>

            <div className="feature-visual">
              <img
                src={landingImage}
                alt="AXON Produktvisualisierung"
                className="feature-image"
              />
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
