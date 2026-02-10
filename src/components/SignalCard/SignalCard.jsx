import "./SignalCard.css";
import { Howl } from "howler";
import { useEffect, useMemo, useState } from "react";

import moduleImg from "../../assets/axon_modul_play.svg";

export function SignalCard({
  id,
  activeId,
  onRequestPlay,
  title,
  text,
  soundSrc,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const sound = useMemo(() => {
    return new Howl({
      src: [soundSrc],
      preload: true,
      html5: true, 
      onplay: () => setIsPlaying(true),
      onend: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      onpause: () => setIsPlaying(false),
      onplayerror: () => setIsPlaying(false),
      onloaderror: () => setIsPlaying(false),
    });
  }, [soundSrc]);

  // Stoppe Sound, wenn eine andere SignalCard aktiv wird
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
      sound.stop(); // Sicherheit: immer bei 0 starten
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
      aria-pressed={isPlaying}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <div className="signalCard-media">
  <img
    src={moduleImg}
    alt="AXON Gurt-Modul"
    className="signalCard-image"
    draggable={false}
  />

</div>
      <h3 className="signalCard-title">{title}</h3>
      <p className="signalCard-text">{text}</p>
    </article>
  );
}
