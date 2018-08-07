import React from "react";
import { CreatePostForm } from "components/organisms";

const CreatePost = ({ user }) => {
  return (
    <div>
      <h2>Create A Post</h2>
      <CreatePostForm user={user} />
    </div>
  );
};
export default CreatePost;
