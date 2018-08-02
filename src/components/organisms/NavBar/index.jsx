import NavBar from "./NavBar";
import { graphql, compose } from "react-apollo";
import { GET_TEST_AUTH } from "state/queries";

export default compose(
  graphql(GET_TEST_AUTH, {
    props: ({ data }) => ({ ...data })
  })
)(NavBar);
