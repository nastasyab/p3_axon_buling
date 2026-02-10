import "./Technology.css";
import { Page } from "../components/Page/Page";
import { Section } from "../components/Section/Section";

import axonModuleImg from "../assets/axon_modul_chatgpt.png";
import ropeImg from "../assets/rope_final_2.0.png";

export function Technology() {
  return (
    <Page>
      <div className="tech">
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

        {/* Block 1: bild links, text rechts */}
        <section className="tech-block">
          <div className="tech-container tech-twoCol">
            <div className="tech-media">
              <img
                src={axonModuleImg}
                alt="AXON Gurt-Modul"
                className="tech-moduleImage"
              />
            </div>

            <div className="tech-copy">
              <h3 className="tech-h3">Bewegung verstehen</h3>
              <p className="tech-p">
                Jeweils ein Modul am Gurt von dir und deinem Partner erfasst
                eure Bewegungen beim Klettern und Sichern. AXON erkennt daraus
                Muster, Übergänge und kritische Momente – und versteht, was ihr
                gerade tut.
              </p>
            </div>
          </div>
        </section>

        {/* Block 2: seil */}
        <section className="tech-rope">
          <div className="tech-ropeCrop">
            <img
              src={ropeImg}
              alt="Kletterseil mit integrierter Sensorik"
              className="tech-ropeImage"
            />
          </div>

          <div className="tech-ropeText">
            <h3 className="tech-h3">Seilspannung lesen</h3>
            <p className="tech-p">
              Im Kletterseil misst eine integrierte Technologie kontinuierlich
              die Dehnung. Zusammen mit euren Bewegungsdaten berechnet AXON die
              aktuelle Situation am Seil – und leitet ab, wann Unterstützung,
              Aufmerksamkeit oder Ruhe gefragt ist.
            </p>
          </div>
        </section>

        {/* Block 3: text links, bild rechts */}
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
              <img
                src={axonModuleImg}
                alt="AXON Gurt-Modul"
                className="tech-moduleImage tech-moduleImageSmall"
              />
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
