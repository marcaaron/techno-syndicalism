import React, { Component } from "react";
import { StyledFormItem, StyledLabel, StyledInput } from "styles";
export default class FormItem extends Component {
  render() {
    const { value, handleChange, type, name, labelText } = this.props;
    return (
      <StyledFormItem>
        <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
        <StyledInput
          type={type}
          onChange={handleChange}
          id={name}
          value={value}
        />
      </StyledFormItem>
    );
  }
}
