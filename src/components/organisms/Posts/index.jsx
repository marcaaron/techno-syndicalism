import React, { Fragment } from "react";
import { Post } from "components/molecules";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_POSTS = gql`
  query {
    allPosts {
      userId
      id
      title
      body
    }
  }
`;

const Posts = () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return null;
      const posts = data.allPosts;
      return (
        <Fragment>
          {posts.map(post => <Post {...post} key={post.id} />)}
        </Fragment>
      );
    }}
  </Query>
);

export default Posts;
