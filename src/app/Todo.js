import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
    this.addTodo =this.addTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    let todos = [...this.state.todos, this.state.newTodo]
    this.setState({
      todos,
      newTodo: ''
    })
  }

  removeTodo(i) {
    let todos = this.state.todos.slice();
    todos.splice(i, 1)
    this.setState({
      todos
    })
  }

  render() {
    console.log(this.state);

    const list = this.state.todos.map((todo, i) => {
      return (
        <li onClick={() => this.removeTodo(i)}>{todo}</li>
      )
    })

    return (
      <div>
        <form action="">
          <input onChange={(e) => this.setState({ newTodo: e.target.value })} value={this.state.newTodo} type="text" placeholder="New Todo"/>
          <button onClick={e => this.addTodo(e)}>Add Todo</button>
        </form>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}
