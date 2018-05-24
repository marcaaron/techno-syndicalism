import React from "react";
import { withRouter } from "react-router-dom";

import { ButtonRaised } from "components/atoms";

const ButtonNav = withRouter(({ children, history, to, ...rest }) => (
  <ButtonRaised
    onClick={() => {
      history.push(`${to}`);
    }}
    {...rest}
  >
    {children}
  </ButtonRaised>
));

export default ButtonNav;
