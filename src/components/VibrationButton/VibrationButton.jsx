import React from "react";
import { useHaptic } from "use-haptic";

export function VibrationButton() {
  const { trigger } = useHaptic();

  return (
    <button
      onClick={() => {
        trigger();        // erzeugt Vibration/Haptik auf einem mobilfähigen Browser
      }}
    >
      Test Vibration
    </button>
  );
}

