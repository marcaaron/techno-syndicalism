import AuthRoute from "./AuthRoute";
import { graphql, compose } from "react-apollo";
import { GET_USER } from "state/queries";

export default compose(
  graphql(GET_USER, {
    props: ({ data }) => ({ ...data })
  })
)(AuthRoute);
