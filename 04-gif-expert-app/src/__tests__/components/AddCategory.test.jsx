import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';

describe('Tests on <AddCategory />', () => {
    it('Should change the input value', () => {
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        // Estas opciones (segundo argumento) es el evento que esta recibiendo la funcion onInputChange como parametro
        fireEvent.change(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe('Saitama');
    });
    it('should call onNewCategory if input has value', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    it('should not call onNewCategory if input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});
