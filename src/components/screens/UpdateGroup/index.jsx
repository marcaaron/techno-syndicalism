import React from "react";
import { UpdateGroupForm } from "components/organisms";

const UpdateGroup = ({ user }) => {
  return (
    <div>
      <h2>Update Group</h2>
      <UpdateGroupForm user={user} />
    </div>
  );
};

export default UpdateGroup;
