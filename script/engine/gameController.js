const initState = {
    health: 100,
    mind: 100,
    sleep: 100,
    bullets: 6,
};

let state;
let eventId;
let event;

const init = () => {
    eventId = 0;
    state = {...initState};
    event = parseEvent(Quest[eventId]);
}

getCurrentState = () => state;
getEventCaption = () => event.caption;
getOptions = () => event.options;
getPicture = () => event.picture;

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
