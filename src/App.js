import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/layout/pages/About";
import uuid from "react-uuid";
// import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: uuid(), title: "To-do 1", completed: false },
        { id: uuid(), title: "To-do 2", completed: false },
        { id: uuid(), title: "To-do 3", completed: false }
      ]
      // todos: []
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //     .then(res => this.setState({ todos: res.data }));
  // }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
    //   this.setState({
    //     todos: [...this.state.todos.filter(todo => todo.id !== id)]
    //   })
    // );
  };

  addTodo = title => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });

    // axios
    //   .post("https://jsonplaceholder.typicode.com/todos", {
    //     title: title,
    //     completed: false
    //   })
    //   .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <>
                <Todos
                  todos={this.state.todos}
                  toggleComplete={this.toggleComplete}
                  deleteTodo={this.deleteTodo}
                />
                <AddTodo addTodo={this.addTodo} />
              </>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
