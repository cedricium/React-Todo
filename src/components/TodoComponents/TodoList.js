import React from 'react'
import Todo from './Todo'
import './Todo.css'

const TodoList = (props) => {
  const { todos, handleToggleCompleted } = props
  return (
    <div className="todos-wrapper">
      {
        todos.map(todo => <Todo key={todo.id} todo={todo} handleToggleCompleted={handleToggleCompleted} />)
      }
    </div>
  )
}

export default TodoList
