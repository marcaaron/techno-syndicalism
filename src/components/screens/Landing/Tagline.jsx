import React from "react";

import { AppContext } from "state/context/app";

import { Paragraph } from "components/atoms";

const Tagline = () => (
  <Paragraph style={{ margin: "auto 4% 7%" }}>
    <AppContext.Consumer>
      {app => <span>{app.tagline}.</span>}
    </AppContext.Consumer>
  </Paragraph>
);

export default Tagline;
