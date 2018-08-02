import React, { Component } from "react";
import { Input, Label } from "styles";

export default class CompanySearch extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.value);
  };

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <Label>
          Search Companies<br />
          <Input type="text" name="search" onChange={handleChange} />
          <Input type="submit" name="search" />
        </Label>
      </form>
    );
  }
}
