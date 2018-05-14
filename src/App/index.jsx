import React, { Component } from "react";
import styled from "styled-components";

import { NavBar, Footer } from "components/organisms";

import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Display>
        <NavBar />
        <Routes />
        <Footer />
      </Display>
    );
  }
}

const Display = styled.div`
  /* display */
  display: grid;
  grid-template-rows: auto 1fr 75px;
  grid-template-areas:
    "nav"
    "content"
    "footer";
  height: 100vh;
`;

export default App;
