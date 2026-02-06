import React from "react";

class AddUserInfor extends React.Component {
  state = {
    Name: "",
    Age: "",
  };

  handleOnchangeInput = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };

  handleOnchangeAge = (event) => {
    this.setState({
      Age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    if (!this.state.Name || !this.state.Age) return;
    
    this.props.handleAddnewUser({
      id: Math.floor(Math.random() * 1000) + "user",
      Name: this.state.Name,
      Age: this.state.Age,
    });

    // reset input
    this.setState({
      Name: "",
      Age: "",
    });
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>Your name:</label>
        <input
          type="text"
          value={this.state.Name}
          onChange={(event) => this.handleOnchangeInput(event)}
        />
        <br />

        <label>Your Age:</label>
        <input
          type="text"
          value={this.state.Age}
          onChange={(event) => this.handleOnchangeAge(event)}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddUserInfor;
