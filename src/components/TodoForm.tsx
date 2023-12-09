import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../store';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');
  const [todoId, setTodoId] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (todoText.trim() === '') {
      return;
    }

    if (todoId !== '') {
      dispatch(updateTodo({ id: todoId, text: todoText }));
    }

    dispatch(addTodo({ id: uuidv4(), text: todoText }));
    setTodoText('');
    setTodoId('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-row justify-center w-3/4">
      <input
        type="text"
        placeholder="Yeni görev ekleyin..."
        value={todoText}
        onChange={handleInputChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 w-2/4"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2 hover:bg-blue-600"
      >
        {todoId === '' ? 'Ekle' : 'Güncelle'}
      </button>
    </form>
  );
};

export default TodoForm;
