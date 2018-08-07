import { compose, graphql } from "react-apollo";
import LoginForm from "./LoginForm";
import { LOGIN_USER } from "state/mutations";

export default compose(graphql(LOGIN_USER, { name: "loginUser" }))(LoginForm);
