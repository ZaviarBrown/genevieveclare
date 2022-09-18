const allServices = {
  haircut: {
    name: 'Haircut',
    select: false,
    rate: 60,
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
    name: 'All Over Color',
    select: false,
    rate: 80,
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
      allow: true,
    },
    rootsToEnds: {
      select: false,
      time: 120,
      price: 105,
    },
  },
  highlights: {
    name: 'Highlights',
    select: false,
    rate: 95,
    disable: ['balayage', 'bleachTone', 'babyLights', 'highlights'],
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
    name: 'Balayage',
    select: false,
    rate: 95,
    disable: ['bleachTone', 'babyLights', 'highlights'],
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
    name: 'Vivids',
    select: false,
    rate: 110,
    price: 110,
    requireConsult: true,
  },
  colorCorrections: {
    name: 'Color Corrections',
    select: false,
    rate: 130,
    price: 130,
    requireConsult: true,
  },
  styling: {
    name: 'Styling',
    select: false,
    rate: 61,
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
      allow: true,
    },
    bridal: {
      select: false,
      allow: true,
      requireConsult: true,
    },
  },
  extensions: {
    name: 'Extensions',
    select: false,
    rate: 70,
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
      time: 60,
      price: 70,
    },
  },
  babyLights: {
    name: 'Baby Lights',
    select: false,
    rate: 100,
    disable: ['balayage', 'bleachTone', 'highlights'],
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
    name: 'Bleach & Tone',
    select: false,
    rate: 85,
    disable: ['balayage', 'allOverColor', 'babyLights', 'highlights'],
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
    name: 'Quiet Appointment',
    select: false,
  },
};

const selections = (obj: any) => {
  const choices = [];

  for (const service in obj) {
    if (obj[service].select) choices.push(obj[service]);
  }

  return choices;
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

export { allServices, selections };
