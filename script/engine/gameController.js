const initStrate = {
    health: 100,
    mind: 100,
    sleep: 100,
    bullets: 6,
};

const state = {...initStrate};

getCurrentState = () => state;

updateCurrentState = ({ health, mind, sleep, bullets }) => {
    if (health !== undefined) state.health = health;
    if (mind !== undefined) state.mind = mind;
    if (sleep !== undefined) state.sleep = sleep;
    if (bullets !== undefined) state.bullets = bullets;
}
