import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Tests on 07-deses-arr', () => {
    it('should return a string and a number', () => {
        // arrange
        const [letters, numbers] = retornaArreglo();
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));
        expect(numbers).toEqual(expect.any(Number));
    });
});
