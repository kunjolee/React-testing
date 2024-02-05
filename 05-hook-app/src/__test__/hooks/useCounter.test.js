import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../hooks/useCounter';

describe('Tests on useCounter', () => {
    it('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    it('should return counter with value 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    it('should increment counter by 3', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => {
            increment(3);
            increment(3);
        });

        expect(result.current.counter).toBe(106);
    });
    it('should decrement counter by 3', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement(3);
            decrement(3);
        });

        expect(result.current.counter).toBe(94);
    });

    it('should reset the counter to its initial value 11', () => {
        const { result } = renderHook(() => useCounter(11));
        const { reset, decrement } = result.current;

        act(() => {
            decrement(3);
            reset();
        });

        expect(result.current.counter).toBe(11);
    });
});
