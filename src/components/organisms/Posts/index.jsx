import React from "react";
import { Query } from "react-apollo";
import Posts from "./Posts";
import { GET_POSTS } from "state/queries";

const PostsQuery = () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data: { allPosts } }) => {
      if (loading) return null;
      if (error) return null;
      console.log(allPosts);
      return <Posts allPosts={allPosts} />;
    }}
  </Query>
);

export default PostsQuery;
