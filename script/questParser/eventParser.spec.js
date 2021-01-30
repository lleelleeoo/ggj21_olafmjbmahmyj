const { parseEvent, extractOptions } = require('./eventParser.js');

const mockEvent = [
    'выставили на холод улицы',
    'picture.jpg',
    '', // условие
    'Продолжить спать', // текст
    '42', // действие
];

describe('eventParser', () => {
    describe('🐙 parseEvent helper', () => {
        it('should extract caption from item', () =>{
            const { caption } = parseEvent(mockEvent);

            expect(caption).toEqual('выставили на холод улицы');
        });

        it('should extract picture from item', () =>{
            const { picture } = parseEvent(mockEvent);

            expect(picture).toEqual('picture.jpg');
        });

        it('should parse single option', () => {
            const { options } = parseEvent(mockEvent);

            expect(options).toEqual([{
                predicate: '',
                caption: 'Продолжить спать',
                action: '42',
            }])
        });

        it('should parse multiply options', () => {
            const extendedMock = [
                ...mockEvent,
                ...['item!key', 'Попытаться вспомнить где вы и что происходит', '12'],
            ]
            const { options } = parseEvent(extendedMock);

            expect(options).toEqual([{
                predicate: '',
                caption: 'Продолжить спать',
                action: '42',
            }, {
                predicate: 'item!key',
                caption: 'Попытаться вспомнить где вы и что происходит',
                action: '12',
            }]);
        });
    });

    describe('🐙 extractOptions helper', () => {
        it('should broke, if not %3 items', () => {
            expect(() => extractOptions(['1', '2'])).toThrow();
            expect(() => extractOptions(['1'])).toThrow();
            expect(() => extractOptions(['1', '2', '3'])).not.toThrow();
            expect(() => extractOptions(['1', '2', '3', '4'])).toThrow();
            expect(() => extractOptions(['1', '2', '3', '1', '2', '3'])).not.toThrow();
        });

        it('should extract single option', () => {
            const options = extractOptions(['1', '2', '3']);

            expect(options).toEqual([{
                predicate: '1',
                caption: '2',
                action: '3',
            }]);
        });

        it('should extract several items', () => {
            const options = extractOptions(['1', '2', '3', '4', '5', '6', '7', '8', '9']);

            expect(options).toEqual([{
                predicate: '1',
                caption: '2',
                action: '3',
            }, {
                predicate: '4',
                caption: '5',
                action: '6',
            }, {
                predicate: '7',
                caption: '8',
                action: '9',
            }]);
        });
    });
});
