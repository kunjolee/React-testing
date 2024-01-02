import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../../constants', () => ({
    VITE_API_KEY: 'API_KEY',
}));

jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {
    const category = 'Saitama';
    it('should show initial loading', () => {
        useFetchGifs.mockReturnValue({
            isLoading: true,
            images: [],
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    it('should show items when images are loaded', () => {
        useFetchGifs.mockReturnValue({
            isLoading: false,
            images: [
                {
                    id: 'arbHBoiUWUgmc',
                    title: 'One Punch Man Preview GIF',
                    url: 'https://media0.giphy.com/media/arbH',
                },
                {
                    id: 'arbHBoiUWUgmc3',
                    title: 'One Punch Man Preview GIF',
                    url: 'https://media0.giphy.com/media/arbH',
                },
                {
                    id: 'arbHBoiUWUgmc4',
                    title: 'One Punch Man Preview GIF',
                    url: 'https://media0.giphy.com/media/arbH',
                },
                {
                    id: 'arbHBoiUWUgmc5',
                    title: 'One Punch Man Preview GIF',
                    url: 'https://media0.giphy.com/media/arbH',
                },
                {
                    id: 'arbHBoiUWUgmc6',
                    title: 'One Punch Man Preview GIF',
                    url: 'https://media0.giphy.com/media/arbH',
                },
            ],
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
        expect(screen.getAllByRole('img').length).toBe(5);
    });
});
