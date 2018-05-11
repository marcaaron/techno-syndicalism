import React from "react";
import styled from "styled-components";

import { Page } from "../../common";

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

const StyledContainer = styled.p`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 30px;
  margin: 20px auto;
  width: 80%;
`;

export default LearnMore;
