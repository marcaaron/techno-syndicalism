import React from "react";

import { AuthProvider, AuthContext } from "../auth";

it("renders context data without crashing", () => {
  render(
    <AuthProvider username="test">
      <AuthContext.Consumer>
        {context => <p>{context.test}</p>}
      </AuthContext.Consumer>
    </AuthProvider>
  );
});
