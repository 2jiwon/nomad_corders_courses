import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    console.log(todo);
    setTodos((currentTodos) => [todo, ...currentTodos]);
    setTodo("");
  }
  console.log(todos);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={todo} placeholder="Write your to do..." onChange={onChange} />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
