import React, { Component } from "react";
import { Button } from "reactstrap";

class LinkLearnReact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      name: "",
    };
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with {this.state.name}
        </a>
        <p>{this.state.value}</p>
        <br />
        <input value={this.state.name} onChange={this.handleInputName} />
        <br />
        <Button outline color="secondary" onClick={this.handleclickIncrement}>
          Increment
        </Button>
        <Button outline color="secondary" onClick={this.handleclickDecrement}>
          Decrement
        </Button>
      </div>
    );
  }

  handleInputName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleclickIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleclickDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };
}
export default LinkLearnReact;
