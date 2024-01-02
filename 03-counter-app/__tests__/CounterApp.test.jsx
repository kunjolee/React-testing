import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Tests on <CounterApp />', () => {
    const initialValue = 10;
    it('should match the snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });
    it('should show initial value 100', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
            '100'
        );
        // expect(screen.getByText(100)).toBeTruthy();
    });
    it('should increment with +1 button', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(initialValue + 1)).toBeTruthy();
    });
    it('should decrement the counter with -1 button', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(initialValue - 1)).toBeTruthy();
    });

    it('should reset the counter with reset button', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
});
