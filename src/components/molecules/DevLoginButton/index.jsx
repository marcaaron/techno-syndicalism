import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { AppContext } from "state/context/app";

class DevLoginButton extends Component {
  state = {
    username: "",
    redirectToReferrer: false
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };

  updateAuth = app => {
    app.toggleAuth(this.state, this.checkShouldRedirect(app.isAuthenticated));
  };

  checkShouldRedirect = previousAuthStatus => {
    // This function fires before the update to isAuthenticated is made, hence
    //  we check if it's _not_ true
    if (!previousAuthStatus) {
      this.setState({ redirectToReferrer: true });
    }
  };

  renderForm = app => (
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="username" onChange={this.handleChange} />
      <button onClick={() => this.updateAuth(app)}>
        {app.isAuthenticated ? "Logout" : "Login"}
      </button>
    </form>
  );

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to="/home" />;
    } else {
      return (
        <AppContext.Consumer>{app => this.renderForm(app)}</AppContext.Consumer>
      );
    }
  }
}

export default DevLoginButton;
