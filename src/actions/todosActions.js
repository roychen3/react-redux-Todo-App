import { GET_TODOS, ADD_TODO, DELETE_TODO, MARK_COMPLETE_TODO } from './types';
import axios from 'axios';
import uuid from 'uuid';

export const getTodos = () => dispatch => {
    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((todos) => dispatch({
            type: GET_TODOS,
            payload: todos.data
        }))
        .catch(err => console.log(err));
};

export const addTodo = (title) => dispatch => {
    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
        .then((res) => {
            res.data.id = uuid.v4();
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
};

export const deleteTodo = (id) => dispatch => {
    axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) =>
            dispatch({
                type: DELETE_TODO,
                id: id
            })
        )
        .catch(err => console.log(err));
};

export const markCompleteTodo = (id) => dispatch => {
    dispatch({
        type: MARK_COMPLETE_TODO,
        id: id
    })
};