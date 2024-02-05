import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../08-useReducer/TodoItem';

describe('Tests on <TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'Learn React',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodo = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should show the pending to complete Todo', () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodo}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe(
            'list-group-item d-flex justify-content-between'
        );
        const spanElement = screen.getByLabelText('span-custom');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain(
            'text-decoration-line-through'
        );
    });
    it('should show the completed Todo', () => {
        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodo}
            />
        );

        const spanElement = screen.getByLabelText('span-custom');

        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    it('should call on DeleteTodo when click on the button', () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodo}
            />
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});
