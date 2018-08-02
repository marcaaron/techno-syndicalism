import React, { Component } from "react";
import PropTypes from "prop-types";

class LoginBtn extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    updateAuth: PropTypes.func
  };

  state = {
    username: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { isAuthenticated, updateAuth } = this.props;
    updateAuth(isAuthenticated, this.state.username);
  };

  render() {
    const { isAuthenticated } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.handleChange} />
        <button type="submit">{isAuthenticated ? "Logout" : "Login"}</button>
      </form>
    );
  }
}

export default LoginBtn;
