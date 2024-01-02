import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Test on 09-promesas', () => {
    // Los tests por defecto son sincronos, es decir, solo mira la declaracion de la promesa getHeroeByIdAsync y no espera a que se resuelva. Por eso, se debe usar el parametro done, esto hara que el test espere a que se resuelva la promesa, y si no lo mandamos a llamar a done, la promesa nunca se resolvera y el test fallara.
    it('getHeroeByIdAsync should return a heroe', (done) => {
        const id = 1;

        getHeroeByIdAsync(id).then((hero) => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC',
            });
            done();
        });
    });
    it('getHeroeByIdAsync should get an error if a heroe doesnt exist', (done) => {
        const id = 100;

        getHeroeByIdAsync(id)
            .then((hero) => {
                // nunca deberia entrar aca, pero si por algun caso entra, el heroe deberia ser null o undefined
                expect(hero).toBeFalsy();
                done();
            })
            .catch((error) => {
                expect(error).toBe('No se pudo encontrar el héroe ' + id);
                done();
            });
    });
});
