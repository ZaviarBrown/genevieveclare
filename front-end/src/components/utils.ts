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

const allServices: { [key: string]: any } = {
    haircut: {
        name: 'Haircut',
        select: false,
        rate: 60,
        bundleTime: 30,
        buzz: {
            name: 'Buzz',
            select: false,
            time: 20,
            price: 20,
        },
        short: {
            name: 'Short - Shoulder and up',
            select: false,
            time: 35,
            price: 35,
        },
        long: {
            name: 'Long - Collarbone and down',
            select: false,
            time: 60,
            price: 60,
        },
        creative: {
            name: 'Creative/Transformation',
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
            name: 'Gloss and toner only',
            select: false,
            time: 60,
            price: 50,
        },
        rootsOnly: {
            name: 'Roots only',
            select: false,
            time: 90,
            price: 80,
            allow: true,
        },
        rootsToEnds: {
            name: 'Roots to ends',
            select: false,
            time: 120,
            price: 105,
        },
    },
    highlights: {
        name: 'Highlights',
        select: false,
        rate: 95,
        disable: ['balayage', 'bleachTone', 'babyLights'],
        partial: {
            name: 'Partial',
            select: false,
            time: 150,
            price: 140,
        },

        full: {
            name: 'Full',
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
            name: 'Partial',
            select: false,
            time: 180,
            price: 215,
        },
        full: {
            name: 'Full',
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
            name: 'Blowout',
            select: false,
            time: 40,
            price: 45,
        },
        specialEvent: {
            name: 'Special Event - Prom, Homecoming, Senior pics, Formal',
            select: false,
            time: 90,
            price: [65, 90],
            allow: true,
        },
        bridal: {
            name: 'Bridal/Wedding',
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
            name: 'Full application',
            select: false,
            requireConsult: true,
        },
        moveUp: {
            name: 'Maintenance move up',
            select: false,
            time: 90,
            price: 105,
        },
        removal: {
            name: 'Removal',
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
            name: 'Partial',
            select: false,
            time: 210,
            price: 250,
        },
        full: {
            name: 'Full',
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
            name: 'Growouts: 1/2 inch or less',
            select: false,
            time: 150,
            price: 140,
        },
        twoInch: {
            name: 'Growouts: 1/2 inch to 2 inches',
            select: false,
            time: 180,
            price: 190,
            message: true,
        },
        moreThanTwo: {
            name: 'Growouts: 2 inches or more',
            select: false,
            requireConsult: true,
        },
    },
    quiet: {
        name: 'Quiet Appointment',
        select: false,
        rate: 0,
    },
};

const selections = (obj: any) => {
    const choices = [];

    for (const service in obj) {
        if (obj[service]) choices.push(service);
    }

    return choices;
};

const hasChanged = (x: any, y: any) => {
    for (const key in x) {
        if (key !== 'quiet' && x[key] !== y[key]) {
            return true;
        }
    }
    return false;
};

const saveLocal = (
    defaultState: any,
    newState: any,
    name: string,
    type: string | undefined = undefined
) => {
    switch (type) {
        case 'yes':
            defaultState.yes = true;
            newState.no
                ? (localStorage[name] = JSON.stringify(newState))
                : newState.yes && hasChanged(defaultState, newState)
                ? (localStorage[name] = JSON.stringify(newState))
                : localStorage.removeItem(name);
            break;
        case 'other':
            hasChanged(defaultState, newState)
                ? newState.other && newState.input === ''
                    ? localStorage.removeItem(name)
                    : (localStorage[name] = JSON.stringify(newState))
                : localStorage.removeItem(name);
            break;
        default:
            hasChanged(defaultState, newState)
                ? (localStorage[name] = JSON.stringify(newState))
                : localStorage.removeItem(name);
    }
};

const restoreLocal = (name: any, set: any) => {
    if (localStorage[name]) {
        set(JSON.parse(localStorage[name]));
    }
};

export { allServices, selections, hasChanged, saveLocal, restoreLocal };

