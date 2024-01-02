import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('first', () => {
    it('getSaludo should return Hola Fernando', () => {
        // Arrange
        const name = 'Fernando';
        // act
        const message = getSaludo(name);
        // assert
        expect(message).toBe(`Hola ${name}`);
    });
});
