import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../../GifExpertApp';

jest.mock('../../../constants', () => ({
    VITE_API_KEY: '1234567890',
}));

describe('Tests on <GifExpertApp />', () => {
    it('it should match the snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    it('it should add a new category', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.change(input, { target: { value: 'NewCategory' } });
        fireEvent.submit(form);

        expect(screen.getByText('NewCategory')).toBeTruthy();
        expect(
            screen.getAllByRole('heading', { level: 3 }).length
        ).toBeGreaterThan(1);
    });
    it('it should not add a new category if it already exists', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: 'One Punch' } });
        fireEvent.submit(form);
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
        expect(screen.getByText('One Punch')).toBeTruthy();
    });
});
