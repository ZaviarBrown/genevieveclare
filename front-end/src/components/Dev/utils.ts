const allServices = {
  haircut: {
    select: false,
    bundleTime: 30,
    buzz: {
      select: false,
      time: 20,
      price: 20,
    },
    short: {
      select: false,
      time: 35,
      price: 35,
    },
    long: {
      select: false,
      time: 60,
      price: 60,
    },
    creative: {
      select: false,
      time: 90,
      price: 90,
    },
  },
  allOverColor: {
    select: false,
    bundleTime: 30,
    glossTonerOnly: {
      select: false,
      time: 60,
      price: 50,
    },
    rootsOnly: {
      select: false,
      time: 90,
      price: 80,
    },
    rootsToEnds: {
      select: false,
      time: 120,
      price: 105,
    },
  },
  highlights: {
    select: false,
    partial: {
      select: false,
      time: 150,
      price: 140,
    },

    full: {
      select: false,
      time: 180,
      price: 220,
    },
  },
  balayage: {
    select: false,
    partial: {
      select: false,
      time: 180,
      price: 215,
    },
    full: {
      select: false,
      time: 180,
      price: 260,
    },
  },
  vivids: {
    select: false,
    price: 110,
    requireConsult: true,
  },
  colorCorrections: {
    select: false,
    price: 130,
    requireConsult: true,
  },
  styling: {
    select: false,
    bundleTime: 60,
    blowout: {
      select: false,
      time: 40,
      price: 45,
    },
    specialEvent: {
      select: false,
      time: 90,
      price: [65, 90],
    },
    bridal: {
      select: false,
      requireConsult: true,
    },
  },
  extensions: {
    select: false,
    bundleTime: 30,
    full: {
      select: false,
      requireConsult: true,
    },
    moveUp: {
      select: false,
      time: 90,
      price: 105,
    },
    removal: {
      select: false,
      price: 105,
    },
  },
  babyLights: {
    select: false,
    partial: {
      select: false,
      time: 210,
      price: 250,
    },
    full: {
      select: false,
      time: 270,
      price: 290,
    },
  },
  bleachTone: {
    select: false,
    halfInch: {
      select: false,
      time: 150,
      price: 140,
    },
    twoInch: {
      select: false,
      time: 180,
      price: 190,
      message: true,
    },
    moreThanTwo: {
      select: false,
      requireConsult: true,
    },
  },
  quiet: {
    select: false,
  },
};



//! Lightening Service[Balayage, Bleach and Tone, Baby Lights, Highlights] must disable each other
//! All over color bundled only allows roots only

/** Haircut, Color, Highlight
 *
 * Highest price point shown sub selections first - Highlight
 * Choose full or partial
 * Color shown next
 * Only "roots only" available (Roots to Ends and Gloss/Toner disabled)
 * Haircuts shown next
 * All choices shown
 */

export { allServices };
