import React from "react";
import { StyledContent } from "styles";
import { Posts } from "components/organisms";

const Home = () => (
  <div>
    <h2>Latest Posts</h2>
    <StyledContent>
      <Posts />
    </StyledContent>
  </div>
);

export default Home;
