import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

export const auth = {
  isAuthenticated: false,
  username: "",
  test: "should render a string"
};

export const AuthContext = createContext(auth);

export class AuthProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    username: PropTypes.string
  };

  state = {
    isAuthenticated: false
  };

  toggleAuth = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated,
      username: this.props.username
    });
  };

  render() {
    const withMethods = {
      ...this.state,
      toggleAuth: this.toggleAuth
    };

    return (
      <AuthContext.Provider value={withMethods}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
