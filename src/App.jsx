/* eslint-disable no-extra-semi */
/* eslint-disable react/jsx-key */
import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    /* if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo('');
      return;
    } */

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>Go</button>
        </form>

        <ul className="allTodos">
          {todos.map((t) => (
            <li className="singleTodo">
              <span className="todoText">{t.todo}</span>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
