import React from "react";
import { StyledH2 } from "styles";
import { LoginForm } from "components/organisms";

const Login = props => {
  console.log(props);
  return (
    <div>
      <StyledH2>Log Into Your Account</StyledH2>
      <LoginForm />
    </div>
  );
};

export default Login;
