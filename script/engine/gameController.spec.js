const { getCurrentState, updateCurrentState, init } = require('./gameController.js');

describe('gameController', () => {
    beforeEach(() => {
        init();
    });

    it('should content init state', () => {
        expect(getCurrentState()).toEqual({
            health: 100,
            mind: 100,
            sleep: 100,
            bullets: 6,
        })
    });

    it('should update state', () => {
        updateCurrentState({
            health: 30,
            mind: 10,
            sleep: 17,
            bullets: 1,
        });

        expect(getCurrentState()).toEqual({
            health: 30,
            mind: 10,
            sleep: 17,
            bullets: 1,
        });
    });

    it('should update part of state', () => {
        updateCurrentState({
            mind: 10,
            bullets: 1,
        });

        expect(getCurrentState()).toEqual({
            health: 100,
            mind: 10,
            sleep: 100,
            bullets: 1,
        });
    });
});
