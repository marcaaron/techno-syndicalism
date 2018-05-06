import React from "react";

import { AppContext } from "../app";

it("renders context data without crashing", () => {
  render(
    <AppContext.Consumer>
      {context => <p>{context.test}</p>}
    </AppContext.Consumer>
  );
});
