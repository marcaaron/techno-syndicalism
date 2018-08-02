import AuthRoute from "./AuthRoute";
import { graphql, compose } from "react-apollo";
import { GET_TEST_AUTH } from "state/queries";

export default compose(
  graphql(GET_TEST_AUTH, {
    props: ({ data }) => ({ ...data })
  })
)(AuthRoute);
