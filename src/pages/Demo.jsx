import "./Demo.css";
import { useState } from "react";

import { Section } from "../components/Section/Section";
import { SignalCard } from "../components/SignalCard/SignalCard";
import { ScenarioDemo } from "../components/ScenarioDemo/ScenarioDemo";

import attentionSound from "../assets/sounds/attention.mp3";
import waitSound from "../assets/sounds/wait.mp3";
import goSound from "../assets/sounds/go.mp3";

export function Demo() {
  const [activeSignalId, setActiveSignalId] = useState(null);

  return (
    <div className="demo">
      <div className="demo-introSpacing">
        <Section
          title="DAS BEDEUTEN DIE SIGNALE."
          text={
            <>
              Damit du weißt, was dein Kletterpartner gerade von dir braucht,
              bekommst du Feedback in Form von Vibration.
              <br />
              Tippe auf die Gurt-Module, um zu hören, wie die verschiedenen
              Signale klingen.
            </>
          }
        />
      </div>

      <section className="demo-signals">
        <div className="demo-container demo-signalGrid">
          <SignalCard
            id="attention"
            activeId={activeSignalId}
            onRequestPlay={setActiveSignalId}
            title="ACHTUNG!"
            text="Dein Partner braucht gerade besondere Aufmerksamkeit. Möglicherweise deuten seine Bewegungen darauf hin, dass er gleich stürzen könnte."
            soundSrc={attentionSound}
          />

          <SignalCard
            id="wait"
            activeId={activeSignalId}
            onRequestPlay={setActiveSignalId}
            title="Warte kurz."
            text={`Dein Kletterpartner braucht gerade etwas Zeit, um mit dem Klettern oder dem Seilmanagement hinterherzukommen.
Gib ihm kurz Zeit.
Sobald du weitermachen kannst, erhältst du das nächste Signal.`}
            soundSrc={waitSound}
          />

          <SignalCard
            id="go"
            activeId={activeSignalId}
            onRequestPlay={setActiveSignalId}
            title="Weiter geht’s!"
            text={`Dein Kletterpartner ist bereit, weiterzumachen.
Du kannst dein Klettern oder Sichern wie gehabt fortsetzen.`}
            soundSrc={goSound}
          />
        </div>
      </section>

      <ScenarioDemo />
    </div>
  );
}
