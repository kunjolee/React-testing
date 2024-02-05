import { render, screen } from '@testing-library/react';
import { HomePage } from '../../09-useContext/HomePage';
import { UserContext } from '../../09-useContext/context/UserContext';

describe('Test on <HomePage />', () => {
    const user = {
        id: 1,
        name: 'Kunjo',
    };

    it('should show the component without the user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('preTag');
        expect(preTag.innerHTML).toBe('null');
        screen.debug();
    });

    it('should show the component with the user', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('preTag');
        expect(JSON.parse(preTag.innerHTML).name).toBe(user.name);
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);
    });
});
