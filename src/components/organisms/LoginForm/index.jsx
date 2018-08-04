import { compose, graphql } from "react-apollo";

import LoginForm from "./LoginForm";
import { TOGGLE_TEST_AUTH } from "state/mutations";
import { GET_TEST_AUTH } from "state/queries";

export default compose(
  graphql(TOGGLE_TEST_AUTH, {
    name: "toggleTestAuth",
    refetchQueries: ["getAuthUser"]
  }),
  graphql(GET_TEST_AUTH, {
    props: ({ data }) => ({ ...data })
  })
)(LoginForm);
