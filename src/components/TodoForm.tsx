import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../store';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');
  const [todoId, setTodoId] = useState(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (todoText.trim() !== '') {
      console.log('test')
      if (todoId === null) {
        dispatch(addTodo({ id: uuidv4(), text: todoText }));
      } else {
        dispatch(updateTodo({ id: uuidv4(), text: todoText }));
      }
      setTodoText('');
      setTodoId(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Yeni görev ekleyin..."
        value={todoText}
        onChange={handleInputChange}
      />
      <button type="submit">{todoId === null ? 'Ekle' : 'Güncelle'}</button>
    </form>
  );
};

export default TodoForm;
