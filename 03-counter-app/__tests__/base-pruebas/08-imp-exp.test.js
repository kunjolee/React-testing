import {
    getHeroeById,
    getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Tests on 08-imp-exp', () => {
    it('getHeroeById should return hero by id ', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ name: 'Batman', owner: 'DC', id: 1 });
    });
    it('getHeroeById should return undefined if hero doesnt exist', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    it('getHeroesByOnwer should return an array with DC heroes', () => {
        const owner = 'DC';
        const dc = getHeroesByOwner(owner);
        expect(dc.length).toBe(3);
        expect(dc).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },
        ]);
        expect(dc).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });

    it('getHeroesByOnwer should return an array with Marvel heroes', () => {
        const owner = 'Marvel';
        const marvel = getHeroesByOwner(owner);
        expect(marvel.length).toBe(2);
        expect(marvel).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });
});
