import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

export const app = {
  name: "Wobbly",
  tagline: "A social app for employees",
  test: "should render a string"
};

export const AppContext = createContext(app);

export class AppProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = { ...app };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
