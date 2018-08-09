import { graphql, compose } from "react-apollo";
import { GET_GROUPS, SEARCH_GROUP } from "state/queries";
import GroupList from "./GroupList";

export default compose(
  graphql(GET_GROUPS, {
    props: ({ data }) => ({ ...data })
  }),
  graphql(SEARCH_GROUP, {
    name: "searchGroupsByName",
    options: ({ match }) => ({
      variables: { search_query: decodeURI(match.params.query_string) }
    })
  })
)(GroupList);
