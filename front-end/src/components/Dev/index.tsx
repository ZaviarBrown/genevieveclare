import { useState } from 'react';
import './Dev.css';

const allServices = {
  haircut: {
    select: false,
    buzz: {
      select: false,
    },
    short: {
      select: false,
      shoulderUp: false,
    },
    long: {
      select: false,
      collarDown: false,
    },
    creative: {
      select: false,
    },
  },
  allOverColor: {
    select: false,
    rootsOnly: {
      select: false,
    },
  },
  highlights: {
    select: false,
    partial: {
      select: false,
    },
    full: {
      select: false,
    },
  },
  balayage: {
    select: false,
    partial: {
      select: false,
    },
    full: {
      select: false,
    },
  },
  vivids: {
    select: false,
    requireConsult: true,
  },
  colorCorrections: {
    select: false,
    requireConsult: true,
  },
  styling: {
    select: false,
    blowout: {
      select: false,
    },
    specialEvent: {
      select: false,
      prom: {
        select: false,
      },
      homeComing: {
        select: false,
      },
      seniorPics: {
        select: false,
      },
      formal: {
        select: false,
      },
      bridal: {
        select: false,
        requireConsult: true,
      },
    },
  },
  extensions: {
    select: false,
    full: {
      select: false,
      requireConsult: true,
    },
    moveUp: {
      select: false,
    },
    removal: {
      select: false,
    },
  },
  babyLights: {
    select: false,
    partial: {
      select: false,
    },
    full: {
      select: false,
    },
  },
  bleachTone: {
    select: false,
    growOuts: {
      select: false,
      requireConsult: true,
    },
  },
  quiet: {
    select: false,
  },
};

const serviceList = Object.keys(allServices);

const Dev = () => {
  const [formData, setFormData] = useState(allServices);

  return <div className="container"></div>;
};

export default Dev;
