import React from "react";
import { StyledContainer, Panel } from "styles";

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
    <Panel isWhite>{/* image placeholder */}</Panel>
  </StyledContainer>
);

export default Landing;
