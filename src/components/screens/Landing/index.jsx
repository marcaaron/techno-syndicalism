import React from "react";
import styled from "styled-components";

import { MainContent } from "components/atoms";

import Description from "./Description";
import Logo from "./Logo";
import Tagline from "./Tagline";

import { Link } from "react-router-dom";

const Landing = () => (
  <MainContent>
    <FlexContainer>
      <CallToAction>
        <Logo />
        <Link to="/login">Login</Link>
        <div style={{ flexBasis: "100%" }}>
          <Tagline />
        </div>
      </CallToAction>
      <ValuePropositions>
        Join Wobbly
        <Link to="/login">Signup</Link>
        <Link to="/workplaces">Find My Workplace</Link>
        <Description />
      </ValuePropositions>
    </FlexContainer>
  </MainContent>
);

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 40px;
`;

const CallToAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ValuePropositions = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 45%;
`;

export default Landing;
