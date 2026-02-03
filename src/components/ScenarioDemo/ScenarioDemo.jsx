import "./ScenarioDemo.css";
import { useState } from "react";
import { ScenarioBox } from "../ScenarioBox/ScenarioBox";

export function ScenarioDemo() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="scenarioDemo">
      <div className="scenarioDemo-intro">
        <h2 className="scenarioDemo-title">SO KÖNNTE ES AUSSEHEN.</h2>
        <p className="scenarioDemo-hint">
          Klicke auf ein Szenario, um zu sehen, wie AXON darauf reagiert.
        </p>
      </div>

      <div className="scenarioDemo-container scenarioDemo-grid">
        {/* Left column */}
        <div className="scenarioDemo-col">
          <div className="scenarioDemo-colTitle">Der Sichernde.</div>

          <ScenarioBox
            isActive={selected === "belay_rope"}
            onSelect={() => setSelected("belay_rope")}
          >
            DAS SEIL IST VERHEDDERt. DER SICHERNDE BRAUCHT EINEN MOMENT, UM ES
            ZU SORTIEREN.
          </ScenarioBox>

          <ScenarioBox
            isActive={selected === "belay_distracted"}
            onSelect={() => setSelected("belay_distracted")}
          >
            DIE BEWEGUNGEN DES SICHERNDEN SIND UNGLEICHMÄSSIG. VIELLEICHT IST ER
            GERADE VON ETWAS ABGELENKT.
          </ScenarioBox>
        </div>

        {/* Center image placeholder */}
        <div className="scenarioDemo-center">
          <div className="scenarioDemo-photo">
            Szenario-Foto (Platzhalter)
            {selected ? (
              <div className="scenarioDemo-selected">Auswahl: {selected}</div>
            ) : null}
          </div>
        </div>

        {/* Right column */}
        <div className="scenarioDemo-col">
          <div className="scenarioDemo-colTitle">Der Kletternde.</div>

          <ScenarioBox
            isActive={selected === "climb_fallRisk"}
            onSelect={() => setSelected("climb_fallRisk")}
          >
            DER KLETTERNDE HAT PROBLEME, SICH FESTZUHALTEN. ER STÜRZT
            MÖGLICHERWEISE GLEICH AB.
          </ScenarioBox>

          <ScenarioBox
            isActive={selected === "climb_pause"}
            onSelect={() => setSelected("climb_pause")}
          >
            DER KLETTERNDE MACHT GERADE EINE PAUSE. DER SICHERNDE SIEHT IHN
            ALLERDINGS NICHT UND MERKT ZUERST NICHT, DASS ER PAUSIEREN MUSS.
          </ScenarioBox>

          <ScenarioBox
            isActive={selected === "climb_continue"}
            onSelect={() => setSelected("climb_continue")}
          >
            DER KLETTERNDE HAT EBEN PAUSIERT UND SETZT SEIN KLETTERN JETZT FORT.
          </ScenarioBox>
        </div>
      </div>
    </section>
  );
}
