import React, { Component } from "react";

class LoginBtn extends Component {
  state = {
    username: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
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
    });
  };

  render() {
    const { loading, error } = this.props;
    if (loading) return null;
    if (error) return null;
    const {
      userInfo: { isAuthenticated }
    } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.handleChange} />
        <button type="submit">{isAuthenticated ? "Logout" : "Login"}</button>
      </form>
    );
  }
}

export default LoginBtn;
