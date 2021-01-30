const { actionParser } = require('./actionParser.js');

// 2@health+1@mind+1@sleep+3@bullets-1@item+someItem@item-otherItem
describe('actionParser', () => {
    describe('🐙 actionParser helper', () => {
        it('should throw error, if first is not a link', () => {
            expect(() => actionParser('health+1')).toThrow();
            expect(() => actionParser('42@health+1')).not.toThrow();
        });

        it('should return propper struct', () => {
            expect(actionParser('11')).toEqual({nextEvent: 11, add: {}, remove: {}});
        });

        it('should parse link to next', () => {
            expect(actionParser('86')).toHaveProperty('nextEvent', 86);
        });

        it('should parse link to next, if actions passed', () => {
            expect(actionParser('23@health+1')).toHaveProperty('nextEvent', 23);
        });

        it('should throw error, if action is invalid', () => {
            expect(() => actionParser('2@health/2')).toThrow();
        });

        it('should parse add actions', () => {
            expect(actionParser('23@health+20')).toHaveProperty('add', { health: 20 })
        });

        it('should parse remove action', () => {
            expect(actionParser('23@health-25')).toHaveProperty('remove', { health: -25 })
        });

        it('should throw error, if state is unknown', () => {
            expect(() => actionParser('23@pew+146')).toThrow();
        });
    });
});
