import React from 'react'
import './Todo.css'

const Todo = (props) => {
  const { todo, handleToggleCompleted } = props
  return (
    <p
      className={`${todo.completed ? 'todo strike' : 'todo'}`}
      data-todo={todo.id}
      onClick={handleToggleCompleted}>
      {todo.task}
    </p>
  )
}

export default Todo
