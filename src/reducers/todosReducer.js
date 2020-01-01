import { GET_TODOS, ADD_TODO, DELETE_TODO, MARK_COMPLETE_TODO } from '../actions/types';

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                items: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case DELETE_TODO:
            return {
                ...state,
                items: state.items.filter((todo) => todo.id !== action.id)
            };
        case MARK_COMPLETE_TODO:
            return {
                ...state,
                items: state.items.map((todo) => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            }
        default:
            return state;
    }
};