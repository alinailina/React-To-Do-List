import React, { Component } from "react";

export class TodoItem extends Component {
  completed = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="to-do-item">
        <p style={this.completed()}>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />{" "}
          {title}
        </p>

        <button onClick={this.props.deleteTodo.bind(this, id)}>x</button>
      </div>
    );
  }
}

export default TodoItem;
