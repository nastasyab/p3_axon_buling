import "./SignalCard.css";

export function SignalCard({ title, text }) {
  return (
    <article className="signalCard">
      <div className="signalCard-media">
        <div className="signalCard-placeholder">
          Modul
        </div>
      </div>

      <div className="signalCard-wave">
        <div className="signalCard-wavePlaceholder">
          Waveform
        </div>
      </div>

      <h3 className="signalCard-title">{title}</h3>
      <p className="signalCard-text">{text}</p>
    </article>
  );
}
