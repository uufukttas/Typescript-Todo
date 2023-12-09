import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, updateTodo, deleteTodo } from '../store';

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    const createList = () => {
        return todos.length > 0 && todos.map((todo: any) => (
            <li key={todo.id} className="flex items-center justify-between bg-white p-3 rounded-md shadow-md w-3/4">
                <span className="text-lg">{todo.text}</span>
                <div className="space-x-2">
                    <button
                        onClick={() => {
                            const newText = prompt('Yeni metni girin:', todo.text);
                            if (newText !== null) {
                                dispatch(updateTodo({ id: todo.id, text: newText }));
                            }
                        }}
                        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Düzenle
                    </button>
                    <button
                        onClick={() => {
                            dispatch(deleteTodo({ id: todo.id }));
                        }}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Sil
                    </button>
                </div>
            </li>
        ));
    }

    return (
        <ul className="space-y-2 mb-4 flex flex-col justify-center items-center w-full overflow-scroll">
            {createList()}
        </ul>
    );
}

export default TodoList;
