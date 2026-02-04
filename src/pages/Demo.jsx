import "./Demo.css";
import { useEffect, useState } from "react";
import { Howler } from "howler";

import { Section } from "../components/Section/Section";
import { SignalCard } from "../components/SignalCard/SignalCard";
import { ScenarioDemo } from "../components/ScenarioDemo/ScenarioDemo";

export function Demo() {
  const [activeSignalId, setActiveSignalId] = useState(null);

  useEffect(() => {
    const unlock = async () => {
      try {
        if (Howler.ctx && Howler.ctx.state !== "running") {
          await Howler.ctx.resume();
        }
      } catch (e) {
        console.warn("Could not resume AudioContext:", e);
      }
    };

    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

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
              Tippe auf die Gurt-Module, um zu hören, wie die verschiedenen Signale
              klingen.
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
            soundSrc="/sounds/attention.mp3"
          />

          <SignalCard
            id="wait"
            activeId={activeSignalId}
            onRequestPlay={setActiveSignalId}
            title="Warte kurz."
            text={`Dein Kletterpartner braucht gerade etwas Zeit, um mit dem Klettern oder dem Seilmanagement hinterherzukommen.
Gib ihm kurz Zeit.
Sobald du weitermachen kannst, erhältst du das nächste Signal.`}
            soundSrc="/sounds/wait.mp3"
          />

          <SignalCard
            id="go"
            activeId={activeSignalId}
            onRequestPlay={setActiveSignalId}
            title="Weiter geht’s!"
            text={`Dein Kletterpartner ist bereit, weiterzumachen.
Du kannst dein Klettern oder Sichern wie gehabt fortsetzen.`}
            soundSrc="/sounds/go.mp3"
          />
        </div>
      </section>

      <ScenarioDemo />
    </div>
  );
}
