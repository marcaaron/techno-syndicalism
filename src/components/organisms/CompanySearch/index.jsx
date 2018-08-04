import React, { Component } from "react";
import { StyledInput, StyledLabel } from "styles";

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
        <StyledLabel>
          Search Companies<br />
          <StyledInput type="text" name="search" onChange={handleChange} />
          <StyledInput type="submit" name="search" />
        </StyledLabel>
      </form>
    );
  }
}
