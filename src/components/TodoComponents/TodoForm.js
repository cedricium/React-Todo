import React from 'react'
import './Todo.css'

const TodoForm = (props) => {
  const { addTodoHandler, clearTodosHandler, handleInputChange } = props
  return (
    <form
      className="todo-form"
      name="todo-form"
      onSubmit={addTodoHandler}
    >
      <input
        type="text"
        name="task"
        value={props.task}
        placeholder="e.g. write a blog post"
        onChange={handleInputChange}
      />
      <button className="add-todo" onClick={addTodoHandler}>
        +
      </button>
      <button className="clear-todos" onClick={clearTodosHandler}>Clear Completed</button>
    </form>
  )
}

export default TodoForm
