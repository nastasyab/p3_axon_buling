import "./Demo.css";
import { SignalCard } from "../components/SignalCard/SignalCard";
import { ScenarioDemo } from "../components/ScenarioDemo/ScenarioDemo";

export function Demo() {
  return (
    <div className="demo">
       <section className="demo-intro">
        <h1 className="demo-title">DAS BEDEUTEN DIE SIGNALE.</h1>
        <h2 className="demo-subtitle">Intuitives Feedback</h2>
        <p className="demo-lead">
          Damit du weißt, was dein Kletterpartner gerade von dir braucht,
          bekommst du Feedback in Form von Vibration.
          <br />
          Tippe auf die Gurt-Module, um zu hören, wie die verschiedenen Signale
          klingen.
        </p>
      </section>


      <section className="demo-signals">
        <div className="demo-container demo-signalGrid">
          <SignalCard title="ACHTUNG!" text="Dein Partner braucht gerade besondere Aufmerksamkeit. Möglicherweise deuten seine Bewegungen darauf hin, dass er gleich stürzen könnte." />
          <SignalCard title="Warte kurz." text="Dein Kletterpartner braucht gerade etwas Zeit, um mit dem Klettern oder dem Seilmanagement hinterher-zukommen. 
Gib ihm kurz Zeit. 
Sobald du weitermachen kannst, erhälst du das nächste Signal." />
          <SignalCard title="Weiter geht’s!" text="Dein Kletterpartner ist bereit, weiterzumachen. 
Du kannst dein Klettern oder Sichern wie gehabt fortsetzen." />
        </div>
      </section>

      <ScenarioDemo />
    </div>
  );
}
