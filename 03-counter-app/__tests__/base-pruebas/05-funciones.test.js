import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Tests on 05-funciones', () => {
    it('getUser should return an object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };

        const user = getUser();
        expect(testUser).toEqual(user);
    });

    it('getUsuarioActivo should return an object', () => {
        const name = 'Kunjo';
        const activeUser = getUsuarioActivo(name);

        expect(activeUser).toEqual({
            uid: 'ABC567',
            username: name,
        });
    });
});
