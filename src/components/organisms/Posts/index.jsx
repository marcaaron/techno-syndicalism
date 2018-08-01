import React, { Fragment } from "react";
import { Post } from "components/molecules";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const FETCH_POSTS = gql`
  query fetchPosts {
    allPosts {
      user {
        id
      }
      id
      title
      content
    }
  }
`;

const Posts = () => (
  <Query query={FETCH_POSTS}>
    {({ loading, error, data: { allPosts } }) => {
      if (loading) return null;
      if (error) return null;
      return (
        <Fragment>
          {allPosts.map(post => <Post {...post} key={post.id} />)}
        </Fragment>
      );
    }}
  </Query>
);

export default Posts;
