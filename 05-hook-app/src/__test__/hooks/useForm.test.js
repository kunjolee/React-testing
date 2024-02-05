import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../hooks/useForm';

describe('Tests on useForm', () => {
    const initialForm = {
        name: 'Juan',
        email: 'juan@gmail.com',
    };

    it('should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    it('should change the form name', () => {
        const newValue = 'Pedro';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState).toEqual({
            ...initialForm,
            name: newValue,
        });
    });

    it('should reset the form with its initial values', () => {
        const newValue = 'pedro';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState).toBe(initialForm);
    });
});
