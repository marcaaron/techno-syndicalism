import React, { Component } from "react";
import { StyledForm, StyledLink, StyledFormText } from "styles";
import { FormItem } from "components/molecules";
import { ButtonSubmit } from "components/atoms";
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: [target.value] });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userInfo, toggleTestAuth } = this.props;
    const { notifications, imageUrl, messages } = userInfo;
    const username = this.state.username;
    toggleTestAuth({
      variables: {
        isAuthenticated: !userInfo.isAuthenticated,
        notifications,
        imageUrl,
        messages,
        username
      }
    }).then(() => {
      this.props.history.push("/home");
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { username, password } = this.state;
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
          labelText="Password: "
          value={password}
          name="password"
          type="password"
          handleChange={handleChange}
        />
        <ButtonSubmit text="Log In" />
        <StyledFormText>
          Don't have an account? <StyledLink to="/signup">Register</StyledLink>
        </StyledFormText>
      </StyledForm>
    );
  }
}

export default withRouter(LoginForm);
