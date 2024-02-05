import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../09-useContext/LoginPage';
import { UserContext } from '../../09-useContext/context/UserContext';

describe('Tests on <LoginPage />', () => {
    const user = {
        id: 1,
        name: 'Kunjo',
    };

    it('should display the component without the user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        expect(screen.getByLabelText('preTag').innerHTML).toBe('null');
    });
    it('should display the component with the user', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <LoginPage />
            </UserContext.Provider>
        );
        expect(screen.getByLabelText('preTag').innerHTML).toContain(user.name);
        expect(screen.getByLabelText('preTag').innerHTML).toContain(
            `${user.id}`
        );
    });

    it('should call the setUser function', () => {
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith({
            id: 123,
            name: 'Juan',
            email: 'juan@google.com',
        });
    });
});
