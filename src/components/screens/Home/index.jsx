import React from "react";
import styled from "styled-components";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import { Posts } from "components/organisms";

const Home = () => (
  <div>
    <h2>Latest Posts</h2>
    <StyledContent>
      <Posts />
    </StyledContent>
  </div>
);

const StyledContent = styled.div`
  /* box */
  width: 90%;
  max-width: 98vw;
  overflow: auto;

  /* colors */
  background-color: white;

  /* content */
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export default Home;
