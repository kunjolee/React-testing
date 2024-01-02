import { getGifs } from '../../helpers/getGifs';

jest.mock('../../../constants', () => ({
    VITE_API_KEY: 'API_KEY',
}));

describe('Tests on getGifs()', () => {
    it('should return an empty gif array', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeLessThanOrEqual(0);

        // IF the api return a gif array with information
        // expect(gifs.length).toBeGreaterThan(0);
        // expect(gifs[0]).toEqual({
        //     id: expect.any(String),
        //     title: expect.any(String),
        //     url: expect.any(String),
        // });
    });
});
