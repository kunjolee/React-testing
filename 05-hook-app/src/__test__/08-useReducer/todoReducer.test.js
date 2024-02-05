import { todoReducer } from '../../08-useReducer/todoReducer';

describe('Tests on todoReducer', () => {
    const initialState = [
        {
            id: 1,
            description: 'Demo TODO',
            done: false,
        },
        {
            id: 2,
            description: 'TODO 2',
            done: false,
        },
    ];

    it('should return the default state', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    it('should add a TODO', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 3,
                description: 'Learn React',
                done: false,
            },
        };
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(3);
        expect(newState).toContain(action.payload);
        expect(newState).toContainEqual({ ...initialState[0] });
        expect(newState).toEqual([...initialState, action.payload]);
    });

    it('should remove a TODO', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 2,
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);
        expect(newState).not.toContain(initialState[1]);
    });
    it('should toggle a TODO', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false);
    });

    it('should return an empty array', () => {
        const initialState = todoReducer(undefined, {});
        expect(initialState).toEqual([]);
        expect(initialState.length).toBe(0);
    });
});
