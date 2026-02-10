import "./Technology.css";
import { Page } from "../components/Page/Page";
import { Section } from "../components/Section/Section";

export function Technology() {
  return (
    <Page>
      <div className="tech">
        {/* Top Intro */}
        <div className="tech-introSpacing">
          <Section
            title="DAS STECKT IN AXON."
            text={
              <>
                AXON misst eure Bewegungen und die Spannung des Seils – und hält
                euch auf dem Laufenden.
                <br />
                Du weißt immer, ob dein Partner gerade besondere Aufmerksamkeit
                braucht.
                <br />
                Noch bevor er es weiß.
              </>
            }
          />
        </div>

        {/* Block 1: Image left, text right */}
        <section className="tech-block">
          <div className="tech-container tech-twoCol">
            <div className="tech-media">
              <div className="ph ph-module">Modul (Platzhalter)</div>
            </div>

            <div className="tech-copy">
              <h3 className="tech-h3">Bewegung verstehen</h3>
              <p className="tech-p">
                Jeweils ein Modul am Gurt von dir und deinem Partner erfasst eure
                Bewegungen beim Klettern und Sichern. AXON erkennt daraus Muster,
                Übergänge und kritische Momente – und versteht, was ihr gerade
                tut.
              </p>
            </div>
          </div>
        </section>

        {/* Block 2: Big rope visual with text bottom right */}
        <section className="tech-rope">
          <div className="tech-ropeInner">
            <div className="ph ph-rope">Seil / Sensorik (Platzhalter)</div>

            <div className="tech-ropeText">
              <h3 className="tech-h3">Seilspannung lesen</h3>
              <p className="tech-p">
                Im Kletterseil misst eine integrierte Technologie kontinuierlich
                die Dehnung. Zusammen mit euren Bewegungsdaten berechnet AXON
                die aktuelle Situation am Seil – und leitet ab, wann
                Unterstützung, Aufmerksamkeit oder Ruhe gefragt ist.
              </p>
            </div>
          </div>
        </section>

        {/* Block 3: Text left, image right */}
        <section className="tech-block tech-blockLast">
          <div className="tech-container tech-twoCol">
            <div className="tech-copy">
              <h3 className="tech-h3">Verbindung spüren</h3>
              <p className="tech-p">
                Du erhältst Rückmeldung direkt über dein Gurt-Modul. Dezente
                Vibrationen informieren dich im richtigen Moment – ohne Display,
                ohne Ablenkung. Genau dann, wenn es zählt.
              </p>
            </div>

            <div className="tech-media tech-mediaRight">
              <div className="ph ph-moduleSmall">Modul (Platzhalter)</div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
