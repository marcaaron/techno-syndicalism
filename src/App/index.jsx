import React, { Component } from "react";
import styled from "styled-components";

import { NavBar } from "components/organisms";
import RenderStore from "util/RenderStore"; // dev only

import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Display>
        <NavBar />
        <Routes />
        {/* <RenderStore /> */}
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
