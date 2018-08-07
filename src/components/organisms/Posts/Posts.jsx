import React, { Fragment } from "react";
import { Post } from "components/molecules";

const Posts = ({ allPosts }) => {
  return (
    <Fragment>
      {allPosts.map(post => <Post {...post} key={post.id} />)}
    </Fragment>
  );
};

export default Posts;
