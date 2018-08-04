import React, { Component } from "react";
import { StyledForm, StyledLink, StyledFormText } from "styles";
import { FormItem } from "components/molecules";
import { ButtonSubmit } from "components/atoms";

export default class SignupForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConf: ""
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: [target.value] });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { username, email, password, passwordConf } = this.state;

    return (
      <StyledForm onSubmit={handleSubmit}>
        <FormItem
          labelText="Username: "
          value={username}
          name="username"
          type="text"
          handleChange={handleChange}
        />
        <FormItem
          labelText="Email: "
          value={email}
          name="email"
          type="text"
          handleChange={handleChange}
        />
        <FormItem
          labelText="Password: "
          value={password}
          name="password"
          type="password"
          handleChange={handleChange}
        />
        <FormItem
          labelText="Password Confirmation: "
          value={passwordConf}
          name="passwordConf"
          type="passwordConf"
          handleChange={handleChange}
        />
        <ButtonSubmit text="Register" />
        <StyledFormText>
          Already have an account? <StyledLink to="/login">Log In</StyledLink>
        </StyledFormText>
      </StyledForm>
    );
  }
}
