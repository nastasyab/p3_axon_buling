// Hotspot-Positionen (bleiben gleich)
export const hotspots = {
  climber: { x: 77, y: 28 },
  rope: { x: 52, y: 60 },
  belay: { x: 25, y: 76 },
};

// Default-Texte (Fallback)
export const hotspotCopy = {
  climber: {
    title: "",
    description: "AXON erkennt Bewegungen und Belastung beim Klettern.",
  },
  rope: {
    title: "",
    description: "Die Seildehnung liefert wichtige Kontextinformationen.",
  },
  belay: {
    title: "",
    description: "Bewegungen und Seilhandling werden kontinuierlich erfasst.",
  },
};

// Tours: Reihenfolge + optionale Text-Overrides
export const tours = {
  belay_rope: {
    order: ["belay", "rope", "climber"],

    copy: {
      rope: {
        description:
          "Zusammen mit der Seilspannung ergibt sich ein vollständiges Bild: der Sichernde braucht etwas Zeit.",
      },
      climber: {
        description:
          'Der Kletternde erhält das Signal "Warten!" Jetzt hat der Sichernde genug Zeit, um das Seil zu sortieren.',
      },
      belay: {
        description:
          "AXON merkt, dass die Bewegungen des Sichernden ungewöhnlich sind.",
      },
    },


  },

  belay_distracted: {
    order: ["rope", "belay", "climber"],

    copy: {
      rope: {
        description:
          "AXON misst eine unerwartet niedrige Seilspannung.",
      },
      climber: {
        description:
          'Der Kletternde erhält das Signal "Warten!" Er darf weiterklettern, sobald der Sichernde wieder aufmerksam sein kann.',
      },
      belay: {
        description:
          "Das hat auch einen Grund: Der Sichernde wird gerade von einer fremden Person angesprochen."
      },
    },

    
  },



  climb_fallRisk: {
    order: ["climber", "rope", "belay"],
    copy: {
      climber: {
        description:
          "Unruhige Bewegungen und abrutschende Füße deuten darauf hin, dass der Kletternde gleich stürzen könnte.",
      },
      rope: {
        description:
          "Die Spannung des Seils ist normal - aber die Bewegungen des Kletternden sind eindeutig!",
      },
      belay: {
        description:
          'Der Sichernde erhält das Signal "ACHTUNG!" Er zieht das Seil fest und ist auf einen möglichen Sturz vorbereitet.',
      },
    },
  },


  climb_pause: {
    order: ["climber", "rope", "belay"],
    copy: {
      climber: {
        description:
          "Der Kletternde pausiert. Die Bewegungssensoren an seinem Klettergurt messen, dass er sich nicht bewegt.",
      },
      rope: {
        description:
          "Die Seildehnung wird immer geringer.",
      },
      belay: {
        description:
          'Der Sichernde erhält das Signal "Warten!" Sobald der Kletternde sich wieder bewegt, bekommt er das Signal zum Fortsetzen.',
      },
    },
  },


climb_continue: {
    order: ["climber", "rope", "belay"],
    copy: {
      climber: {
        description:
          "Der Kletternde hat Kraft getankt und kann wieder weiterklettern. AXON merkt, dass er sich bewegt.",
      },
      rope: {
        description:
          "Die Spannung des Seils erhöht sich.",
      },
      belay: {
        description:
          'Der Kletternde erhält das Signal "Fortsetzen!" Er kann wie gehabt weitersichern.',
      },
    },
  },


};
