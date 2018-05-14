import React from "react";
import styled from "styled-components";

import { MainContent } from "components/atoms";

const LearnMore = () => (
  <Page noSolidBackground>
    <StyledContainer>
      <p>
        This project is being developed through{" "}
        <a href="https://progcode.org">ProgCode</a>, a group of progressive
        coders.
      </p>
    </StyledContainer>
    <StyledContainer>
      <p>
        Read the original outline of the app{" "}
        <a href="https://bananananaba.com/Techno-Syndicalism-Outline.html">
          here
        </a>.
      </p>
    </StyledContainer>
  </Page>
);

const StyledText = styled.p`
  background-color: ${({ theme }) => theme.colors.white};
`;

export default LearnMore;
