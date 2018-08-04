import React, { Component } from "react";
import { StyledForm, StyledLink, StyledFormText } from "styles";
import { FormItem } from "components/molecules";
import { ButtonSubmit } from "components/atoms";
import { withRouter } from "react-router-dom";
import { signIn } from "util/loginUtils";
import { withApollo } from "react-apollo";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userInfo, toggleTestAuth } = this.props;
    // const { notifications, imageUrl, messages } = userInfo;
    const { email, password } = this.state;
    this.props
      .loginUser({
        variables: { email, password }
      })
      .then(data => {
        signIn(data.data.signinUser.token);
        this.props.client.resetStore();
        this.props.history.push("/home");
      });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    return (
      <StyledForm onSubmit={handleSubmit}>
        <FormItem
          labelText="Email: "
          value={email}
          name="email"
          type="email"
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

export default withRouter(withApollo(LoginForm));
