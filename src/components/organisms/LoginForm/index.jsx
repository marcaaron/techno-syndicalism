import { compose, graphql } from "react-apollo";

import LoginForm from "./LoginForm";
import { UPDATE_CLIENT_INFO, LOGIN_USER } from "state/mutations";
import { GET_TEST_AUTH } from "state/queries";

export default compose(graphql(LOGIN_USER, { name: "loginUser" }))(LoginForm);

// Client State Test Queries/Mutations
// graphql(TOGGLE_TEST_AUTH, {
//   name: "toggleTestAuth",
//   refetchQueries: ["getAuthUser"]
// }),
// graphql(GET_TEST_AUTH, {
//   props: ({ data }) => ({ ...data })
// })
