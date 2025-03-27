import randomNumber from './app';

describe('randomNumber', () => {

    it('return 1 when min = 1 and max = 1', () => {
        expect(randomNumber(1,1)).toBe(1);
    })

    it('throw exception when min or max is not a number', () => {
        expect(() => randomNumber(1, '2')).toThrow();
    })


})
