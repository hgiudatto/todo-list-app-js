import React, { useState } from "react"

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>{editId ? "Edit" : "Go"}</button>
    </form>
  )
}

export default TodoForm
