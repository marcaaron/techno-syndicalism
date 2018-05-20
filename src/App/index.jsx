import React, { Component } from "react";
import styled from "styled-components";

import { NavBar } from "components/organisms";

import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Display>
        <NavBar />
        <Routes />
      </Display>
    );
  }
}

const Display = styled.div`
  /* display */
  display: flex;
  flex-direction: column;

  /* box */
  min-height: 100vh;
`;

export default App;
