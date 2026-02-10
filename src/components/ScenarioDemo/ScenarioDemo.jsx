import "./ScenarioDemo.css";
import { useState } from "react";
import { driver } from "driver.js";

import { hotspots, hotspotCopy, tours } from "./scenarioConfig";

import { ScenarioBox } from "../ScenarioBox/ScenarioBox";
import { Section } from "../Section/Section";
import { ScenarioPhotoHotspots } from "../ScenarioPhotoHotspots/ScenarioPhotoHotspots";

import demoImg from "../../assets/demo_img.png";

export function ScenarioDemo() {
  const [selected, setSelected] = useState(null);

  const startTour = (tourKey) => {
    const tour = tours[tourKey];
    if (!tour) return;

    const steps = tour.order.map((id) => {
      const override = tour.copy?.[id];
      const base = hotspotCopy[id];

      return {
        element: `[data-driver="hotspot-${id}"]`,
        popover: {
          title: override?.title ?? base?.title ?? id,
          description: override?.description ?? base?.description ?? "",
          side: "top",
          align: "center",
        },
      };
    });

    driver({
      showProgress: true,
      animate: true,
      overlayOpacity: 0.5,
      allowClose: true,
      nextBtnText: "Weiter",
      prevBtnText: "Zurück",
      doneBtnText: "Fertig",
      steps,
    }).drive();
  };


 const selectScenario = (scenarioKey) => {
  // Wenn dasselbe Szenario erneut geklickt wird → wieder abwählen
  if (selected === scenarioKey) {
    setSelected(null);
    return;
  }

  // Anderes Szenario auswählen
  setSelected(scenarioKey);

  // Tour nur starten, wenn es dafür eine gibt
  if (tours[scenarioKey]) {
    startTour(scenarioKey);
  }
};


  return (
    <section className="scenarioDemo">
      <div className="scenarioDemo-introSpacing">
        <Section
          title="SO KÖNNTE ES AUSSEHEN."
          text="Klicke auf ein Szenario, um zu sehen, wie AXON darauf reagiert."
        />
      </div>

      <div className="scenarioDemo-container scenarioDemo-grid">
        {/* Left column */}
        <div className="scenarioDemo-col">
          <div className="scenarioDemo-colTitle">Der Sichernde.</div>

          <ScenarioBox
            isActive={selected === "belay_rope"}
            onSelect={() => selectScenario("belay_rope")}
          >
            DAS SEIL IST VERHEDDERT. DER SICHERNDE BRAUCHT EINEN MOMENT, UM ES ZU
            SORTIEREN.
          </ScenarioBox>

          <ScenarioBox
            isActive={selected === "belay_distracted"}
            onSelect={() => selectScenario("belay_distracted")}
          >
            DIE BEWEGUNGEN DES SICHERNDEN SIND UNGLEICHMÄSSIG. VIELLEICHT IST ER
            GERADE VON ETWAS ABGELENKT.
          </ScenarioBox>
        </div>

        {/* Center image */}
        <div className="scenarioDemo-center">
          <ScenarioPhotoHotspots
            imageSrc={demoImg}
            alt="Kletterszenario Demo"
            selected={selected}
            hotspots={hotspots}
          />
        </div>

        {/* Right column */}
        <div className="scenarioDemo-col">
          <div className="scenarioDemo-colTitle">Der Kletternde.</div>

          <ScenarioBox
            isActive={selected === "climb_fallRisk"}
            onSelect={() => selectScenario("climb_fallRisk")}
          >
            DER KLETTERNDE HAT PROBLEME, SICH FESTZUHALTEN. ER STÜRZT
            MÖGLICHERWEISE GLEICH AB.
          </ScenarioBox>

          <ScenarioBox
            isActive={selected === "climb_pause"}
            onSelect={() => selectScenario("climb_pause")}
          >
            DER KLETTERNDE MACHT GERADE EINE PAUSE. DER SICHERNDE SIEHT IHN
            ALLERDINGS NICHT UND ZIEHT WEITER SEIL NACH.
          </ScenarioBox>

          <ScenarioBox
            isActive={selected === "climb_continue"}
            onSelect={() => selectScenario("climb_continue")}
          >
            DER KLETTERNDE HAT EBEN PAUSIERT UND SETZT SEIN KLETTERN JETZT FORT.
          </ScenarioBox>
        </div>
      </div>
    </section>
  );
}
