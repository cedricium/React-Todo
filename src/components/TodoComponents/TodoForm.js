import React from 'react'

const TodoForm = (props) => {
  const { addTodoHandler, clearTodosHandler, handleInputChange } = props
  return (
    <form
      name="todo-form"
      onSubmit={addTodoHandler}
    >
      <input
        type="text"
        name="task"
        value={props.task}
        placeholder="Add a todo..."
        onChange={handleInputChange}
      />
      <button onClick={addTodoHandler}>
        Add Todo
      </button>
      <button onClick={clearTodosHandler}>Clear Completed</button>
    </form>
  )
}

export default TodoForm
