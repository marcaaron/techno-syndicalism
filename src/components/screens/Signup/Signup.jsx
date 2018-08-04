import React, { Fragment } from "react";
import { StyledH2 } from "styles";
import { SignupForm } from "components/organisms";

const Signup = () => (
  <Fragment>
    <StyledH2> Register a New Account</StyledH2>
    <SignupForm />
  </Fragment>
);

export default Signup;
