import React, { Component } from "react";
import styled from "styled-components";

import Header from "../../features/Header";
import TechnoSyndicalismMVPControl from "../../features/Demo/TechnoSyndicalismMVPControl";

class LandingPage extends Component {
  render() {
    return (
      <Display>
        <Header />
        <TechnoSyndicalismMVPControl />
      </Display>
    );
  }
}

const Display = styled.div`
  text-align: center;
`;

export default LandingPage;
