import React, { Component } from "react";

import { AuthProvider, AuthContext } from "../../../state/context/auth";

class DevLoginButton extends Component {
  state = {
    value: ""
  };

  handleSubmit = e => e.preventDefault();

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  render() {
    return (
      <AuthProvider username={this.state.value}>
        <AuthContext.Consumer>
          {auth => (
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" onChange={this.handleChange} />
              <button onClick={auth.toggleAuth}>
                {auth.isAuthenticated ? "Logout" : "Login"}
              </button>
              <label>{JSON.stringify(auth.username, null, 1)}</label>
            </form>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );
  }
}

export default DevLoginButton;
