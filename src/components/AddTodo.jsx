import React, { Component } from "react";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add to-do"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="button" />
      </form>
    );
  }
}

export default AddTodo;
