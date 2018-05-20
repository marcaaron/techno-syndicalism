import React from "react";
import styled from "styled-components";

import CallToActions from "./CallToActions";
import HeroText from "./HeroText";
import NewestItem from "./NewestItem";
import Tagline from "./Tagline";

const Landing = () => (
  <StyledContainer>
    <Panel>
      <NewestItem />
      <HeroText />
      <Tagline />
      <CallToActions />
    </Panel>
    <Panel isWhite>Image</Panel>
  </StyledContainer>
);

const StyledContainer = styled.main`
  /* display */
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  flex: 1;

  /* font */
  font-size: 1.5em;
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const Panel = styled.div`
  /* display */
  flex: 1;

  /* box */
  min-width: 425px;
  padding-top: 3%;

  /* color */
  color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.primary : theme.colors.white};
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.white : theme.colors.primary};
`;

export default Landing;
