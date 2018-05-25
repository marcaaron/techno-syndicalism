import React from "react";

import MyComponent from "../StyledLink";

const ExampleComponent = () => <div />;

it("renders without crashing", () => {
  shallow(
    <MyComponent to="/">
      <ExampleComponent />
    </MyComponent>
  );
});
