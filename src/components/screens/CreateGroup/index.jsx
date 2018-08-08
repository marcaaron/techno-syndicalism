import React from "react";
import { CreateGroupForm } from "components/organisms";

const CreateGroup = ({ user }) => {
  return (
    <div>
      <h2>Create A New Group</h2>
      <CreateGroupForm user={user} />
    </div>
  );
};

export default CreateGroup;
