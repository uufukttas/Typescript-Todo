
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
