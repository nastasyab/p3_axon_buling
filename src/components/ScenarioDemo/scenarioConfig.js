// Hotspot-Positionen (bleiben gleich)
export const hotspots = {
  climber: { x: 77, y: 28 },
  rope: { x: 52, y: 60 },
  belay: { x: 25, y: 76 },
};

// Default-Texte (Fallback)
export const hotspotCopy = {
  climber: {
    title: "Der Kletternde",
    description: "AXON erkennt Bewegungen und Belastung beim Klettern.",
  },
  rope: {
    title: "Das Seil",
    description: "Die Seildehnung liefert wichtige Kontextinformationen.",
  },
  belay: {
    title: "Der Sichernde",
    description: "Bewegungen und Seilhandling werden kontinuierlich erfasst.",
  },
};

// Tours: Reihenfolge + optionale Text-Overrides
export const tours = {
  belay_rope: {
    order: ["belay", "rope", "climber"],

    copy: {
      rope: {
        title: "Verheddertes Seil",
        description:
          "Ungewöhnliche Seilbewegungen deuten darauf hin, dass der Sichernde kurz blockiert ist.",
      },
      climber: {
        title: "Wartender Kletternder",
        description:
          "Der Kletternde hält inne – AXON erkennt die Diskrepanz zwischen beiden.",
      },
      belay: {
        title: "Sichernder braucht Zeit",
        description:
          "AXON signalisiert dem Kletternden: kurz warten.",
      },
    },


  },

  belay_distracted: {
    order: ["belay", "rope", "climber"],

    copy: {
      rope: {
        title: "Verheddertes Seil",
        description:
          "Ungewöhnliche Seilbewegungen deuten darauf hin, dass der Sichernde kurz blockiert ist.",
      },
      climber: {
        title: "Wartender Kletternder",
        description:
          "Der Kletternde hält inne – AXON erkennt die Diskrepanz zwischen beiden.",
      },
      belay: {
        title: "Sichernder braucht Zeit",
        description:
          "AXON signalisiert dem Kletternden: kurz warten.",
      },
    },

    
  },



  climb_fallRisk: {
    order: ["climber", "rope", "belay"],
    copy: {
      climber: {
        title: "Erhöhtes Sturzrisiko",
        description:
          "Unruhige Bewegungen und abrutschende Füße deuten auf einen möglichen Sturz hin.",
      },
      rope: {
        title: "Hohe Seilbelastung",
        description:
          "Das Seil steht unter erhöhter Spannung – ein Sturz ist wahrscheinlich.",
      },
      belay: {
        title: "Sichernder muss reagieren",
        description:
          "AXON warnt den Sichernden, sofort aufmerksam zu sein.",
      },
    },
  },


  climb_pause: {
    order: ["climber", "rope", "belay"],
    copy: {
      climber: {
        title: "Erhöhtes Sturzrisiko",
        description:
          "Unruhige Bewegungen und abrutschende Füße deuten auf einen möglichen Sturz hin.",
      },
      rope: {
        title: "Hohe Seilbelastung",
        description:
          "Das Seil steht unter erhöhter Spannung – ein Sturz ist wahrscheinlich.",
      },
      belay: {
        title: "Sichernder muss reagieren",
        description:
          "AXON warnt den Sichernden, sofort aufmerksam zu sein.",
      },
    },
  },


climb_continue: {
    order: ["climber", "rope", "belay"],
    copy: {
      climber: {
        title: "Erhöhtes Sturzrisiko",
        description:
          "Unruhige Bewegungen und abrutschende Füße deuten auf einen möglichen Sturz hin.",
      },
      rope: {
        title: "Hohe Seilbelastung",
        description:
          "Das Seil steht unter erhöhter Spannung – ein Sturz ist wahrscheinlich.",
      },
      belay: {
        title: "Sichernder muss reagieren",
        description:
          "AXON warnt den Sichernden, sofort aufmerksam zu sein.",
      },
    },
  },


};
