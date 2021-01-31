const initState = {
    health: 100,
    mind: 100,
    sleep: 100,
    bullets: 6,
};

const LOST_EVENT = 'lostEvent';

let state;
let eventId;
let event;

const init = () => {
    updateCurrentEvent(0 || 1);
    state = {...initState};
}

getCurrentState = () => state;
getEventCaption = () => event.caption;
getOptions = () => event.options.map(({caption, action}) => ({caption, action}));
getPicture = () => event.picture;

const processAction = (actionString) => {
    let parsedAction;
    try {
        parsedAction = actionParser(actionString);
    } catch (e) {
        parsedAction = {
            nextEvent: LOST_EVENT,
            add: {},
            remove: {}
        }
        setTimeout(() => {throw e});
    }
    const { nextEvent, add, remove } = parsedAction;
    const nextState = { ...state };

    for (item in add) {
        if (item === 'item') continue;
        nextState[item] = state[item] + add[item];
    }

    for (item in remove) {
        if (item === 'item') continue
        nextState[item] = state[item] - remove[item];
    }

    updateCurrentEvent(nextEvent);
    updateCurrentState(nextState);
};

const updateCurrentEvent = (nextId) => {
    if (nextId === LOST_EVENT) {
        eventId = nextId;
        event = {
            caption: 'Этот сценарий ещё не приснился сценаристу',
            options: [],
            picture: `${LOST_EVENT}.jpg`
        }

        return;
    }

    eventId = nextId - 1;
    event = parseEvent(Quest[eventId]);
}

const updateCurrentState = ({ health, mind, sleep, bullets }) => {
    if (health !== undefined) state.health = health;
    if (mind !== undefined) state.mind = mind;
    if (sleep !== undefined) state.sleep = sleep;
    if (bullets !== undefined) state.bullets = bullets;
}

// for tests
try {
    module.exports = {
        getCurrentState, updateCurrentState, init
    }
} catch {}
