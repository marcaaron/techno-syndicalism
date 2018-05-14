import React from "react";
import styled from "styled-components";

import { MainContent } from "components/atoms";
import { Posts } from "components/organisms";

const Home = () => (
  <MainContent>
    <h2>Latest Posts</h2>
    <StyledContent>
      <Posts />
    </StyledContent>
  </MainContent>
);

const StyledContent = styled.div`
  max-width: 98vw;
  overflow: auto;
  background-color: white;
  width: 90%;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export default Home;
