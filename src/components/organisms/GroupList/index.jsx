import { graphql, compose } from "react-apollo";
import { GET_GROUPS } from "state/queries";
import GroupList from "./GroupList";

export default compose(
  graphql(GET_GROUPS, {
    props: ({ data }) => ({ ...data })
  })
)(GroupList);
