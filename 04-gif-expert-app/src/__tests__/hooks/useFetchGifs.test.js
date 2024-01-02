import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../../constants', () => ({
    VITE_API_KEY: 'API_KEY',
}));
describe('Tests on useFetchGifs custom hook', () => {
    it('should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    it('should return an array of images and isLoading false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        // waitFor is a function that returns a promise. It waits for the callback function to return true in its condition
        // En este caso le estoy diciendo, espera hasta que tengas imagenes, una vez ya tenes imagenes, puedes seguir ejecutando el codigo
        // Espera a que la condicion en el callback se cumpla, una vez se cumpla, sigue ejecutando el codigo
        await waitFor(() =>
            expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

        // TODO: REMAINDER, esto esta dando error porque la variable de entorno VITE_API_KEY no le estoy pasando el token, entonces la api no retorna nada
    });
});
