import React from 'react';
import dayjs from 'dayjs'
import './components/TodoComponents/Todo.css'

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      task: '',
      todos: [
        {
          task: 'build a todo app',
          id: Date.now(),
          completed: false,
        }
      ]
    }

    this.addTodoHandler = this.addTodoHandler.bind(this)
    this.clearTodosHandler = this.clearTodosHandler.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleToggleCompleted = this.handleToggleCompleted.bind(this)
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this)
    this.retrieveFromLocalStorage = this.retrieveFromLocalStorage.bind(this)
  }

  componentDidMount() {
    window.addEventListener('load', this.retrieveFromLocalStorage)
    window.addEventListener('unload', this.saveToLocalStorage)
  }

  componentWillUnmount() {
    window.addEventListener('load', this.retrieveFromLocalStorage)
    window.addEventListener('unload', this.saveToLocalStorage)
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  retrieveFromLocalStorage() {
    const persistedTodos = window.localStorage.getItem('todos')
    if (persistedTodos !== null) {
      this.setState({
        todos: JSON.parse(persistedTodos)
      })
    }
  }

  addTodoHandler(event) {
    event.preventDefault()
    const { task, todos } = this.state
    if (task.length > 0) {
      const todosCopy = todos.slice()
      todosCopy.push({
        id: Date.now(),
        completed: false,
        task,
      })
      this.setState({
        todos: todosCopy,
        task: '',
      })
    }
  }

  clearTodosHandler() {
    const pendingTodos = this.state.todos.slice().filter(todo => todo.completed === false)
    this.setState({
      todos: pendingTodos
    })
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleToggleCompleted(event) {
    const todoId = event.target.dataset.todo
    const index = this.state.todos.findIndex(todo => {
      return todo.id === Number.parseInt(todoId, 10)
    })
    const updatedTodos = [...this.state.todos]
    updatedTodos[index] = {
      task: updatedTodos[index].task,
      id: updatedTodos[index].id,
      completed: !updatedTodos[index].completed
    }
    this.setState({ todos: updatedTodos })
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Get Sh*t Done</h1>
        <p className="todays-date" style={{textTransform: 'upperCase'}}>{dayjs().format('ddd, D MMM YYYY')}</p>
        <TodoForm
          task={this.state.task}
          addTodoHandler={this.addTodoHandler}
          clearTodosHandler={this.clearTodosHandler}
          handleInputChange={this.handleInputChange}
        />
        <TodoList
          todos={this.state.todos}
          handleToggleCompleted={this.handleToggleCompleted}
        />
      </div>
    );
  }
}

export default App;
