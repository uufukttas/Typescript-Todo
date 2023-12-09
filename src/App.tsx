
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App justify-center flex flex-col h-screen items-center">
      <h1 className="text-3xl font-semibold text-center text-gray-800">Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
