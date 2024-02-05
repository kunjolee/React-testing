import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MainApp } from '../../09-useContext/MainApp';

describe('Tests on <MainApp />', () => {
    it('should display the HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
    });
    it('should display the LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
    it('should display the AboutPage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
});
