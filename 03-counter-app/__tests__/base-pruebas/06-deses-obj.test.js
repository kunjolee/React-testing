import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Tests on 06-deses-obj', () => {
    it('should return an object', () => {
        const clave = 'Ironman';
        const edad = 45;
        const superHero = usContext({ clave, nombre: 'Tony', edad });

        expect(superHero).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232,
            },
        });
    });
});
