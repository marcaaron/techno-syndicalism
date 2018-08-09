import React, { Component } from "react";
import { StyledInput, StyledLabel } from "styles";

export default class GroupSearch extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const params = encodeURI(this.state.value);
    this.props.history.push(`/groups/search/${params}`);
  };

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <StyledLabel>
          Search Groups<br />
          <StyledInput type="text" name="search" onChange={handleChange} />
          <StyledInput type="submit" name="search" />
        </StyledLabel>
      </form>
    );
  }
}
