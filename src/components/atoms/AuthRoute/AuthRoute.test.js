import React from "react";

import MyComponent from "../AuthRoute";

const ExampleComponent = () => <div />;

it("renders without crashing", () => {
  shallow(<MyComponent component={<ExampleComponent />} />);
});
