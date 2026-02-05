import "./SignalCard.css";
import { Howl, Howler } from "howler";
import { useEffect, useMemo, useState } from "react";


export function SignalCard({ id, activeId, onRequestPlay, title, text, soundSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);

const sound = useMemo(() => {
  return new Howl({
    src: [soundSrc],
    preload: true,
    html5: true,            // ✅ WICHTIG: umgeht AudioContext/Autoplay-Probleme
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
    onstop: () => setIsPlaying(false),
    onpause: () => setIsPlaying(false),
    onplayerror: () => setIsPlaying(false),
    onloaderror: () => setIsPlaying(false),
  });
}, [soundSrc]);

useEffect(() => {
  if (activeId && activeId !== id) {
    sound.stop();
  }
}, [activeId, id, sound]);

  // Cleanup beim Unmount
  useEffect(() => {
    return () => {
      sound.stop();
      sound.unload();
    };
  }, [sound]);

const toggle = () => {
  onRequestPlay?.(id);

  if (sound.playing()) {
    sound.stop();
  } else {
    sound.stop();
    sound.play();
  }
};
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <article
      className={`signalCard ${isPlaying ? "isPlaying" : ""}`}
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyDown={onKeyDown}
      aria-pressed={isPlaying}
    >
      <div className="signalCard-media">
        <div className="signalCard-placeholder">Modul</div>
      </div>

      <div className="signalCard-wave" aria-hidden="true">
        <div className="waveBars">
          {Array.from({ length: 12 }).map((_, i) => (
            <span className="waveBar" key={i} />
          ))}
        </div>
      </div>

      <h3 className="signalCard-title">{title}</h3>
      <p className="signalCard-text">{text}</p>
    </article>
  );
}
