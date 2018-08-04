import SignupForm from "./SignupForm";
import { compose, graphql } from "react-apollo";
import { SIGNUP_USER, LOGIN_USER } from "state/mutations";

export default compose(
  graphql(SIGNUP_USER, {
    name: "signupUser"
  }),
  graphql(LOGIN_USER, {
    name: "loginUser"
  })
)(SignupForm);
