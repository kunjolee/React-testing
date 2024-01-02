import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Tests on 11-async-await', () => {
    it('getImage should return an error if api doesnt exist', async () => {
        const url = await getImagen();
        expect(typeof url).toEqual('string');
        expect(url).toBe('Image not found');
    });
});
