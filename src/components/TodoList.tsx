import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, updateTodo, deleteTodo } from '../store';

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('todos', todos)
    }, [todos]);

    const createList = () => (
        todos.length > 0 && todos.map((todo: any) => (
            <li key={todo.id}>
                {todo.text}
                <button
                    onClick={() => {
                        const newText = prompt('Yeni metni girin:', todo.text);
                        if (newText !== null) {
                            dispatch(updateTodo({ id: todo.id, text: newText }));
                        }
                    }}
                >
                    Düzenle
                </button>
                <button
                    onClick={() => {
                        dispatch(deleteTodo({ id: todo.id }));
                    }}
                >
                    Sil
                </button>
            </li>
        ))
    );

    return (
        <ul>
            {createList()}
        </ul>
    );
};

export default TodoList;
