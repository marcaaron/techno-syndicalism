import React from "react";
import styled from "styled-components";

import { Page } from "../../common";

import Description from "./Description";
import Links from "./Links";
import Logo from "./Logo";
import Tagline from "./Tagline";
import Title from "./Title";

const LandingPage = () => (
  <Page noSolidBackground>
    <StyledHeader>
      <Title />
      <Tagline />
      <Logo />
    </StyledHeader>
    <StyledMain>
      <Description />
      <Links />
    </StyledMain>
  </Page>
);

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LandingPage;
