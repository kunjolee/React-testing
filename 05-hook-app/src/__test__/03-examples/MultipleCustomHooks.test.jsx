import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../03-examples';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');
describe('Tests on <MultipleCustomHooks />', () => {
    const mockIncrement = jest.fn();
    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 3,
            increment: mockIncrement,
        });
        jest.clearAllMocks();
    });

    it('should show the component by default', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText('BreakingBad Quotes')).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(nextButton.disabled).toBe(true);
    });

    it('should show a Quote', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Walter White',
                    quote: 'I am not in danger',
                },
            ],
            isLoading: false,
            hasError: null,
        });
        render(<MultipleCustomHooks />);

        expect(screen.getByText('I am not in danger')).toBeTruthy();
        expect(screen.getByText('Walter White')).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    it('should call increment function', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Walter White',
                    quote: 'I am not in danger',
                },
            ],

            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
        expect(mockIncrement).toHaveBeenCalledTimes(1);
    });
});
