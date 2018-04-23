import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Welcome } from "@storybook/react/demo";

import App from "../App";

storiesOf("Welcome", module)
  .add("to Storybook", () => <Welcome showApp={linkTo("Button")} />)
  .add("to the App", () => <App />);

storiesOf("Components/Common/Buttons", module).add("with Storybook", () => (
  <Button>An example component provided by Storybook</Button>
));
