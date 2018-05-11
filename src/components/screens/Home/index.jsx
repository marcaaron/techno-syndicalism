import React, { StrictMode } from "react";

import { Page } from "../../common";
import { Posts } from "../../features";

const Home = () => (
  <Page>
    <StrictMode>
      <h2>Latest Posts</h2>
      <Posts />
    </StrictMode>
  </Page>
);

export default Home;
