import React from "react";
import { StyledLink } from "styles";

const User = ({ user: { username } }) => {
  return (
    <StyledLink to={`/users/${username}`}>
      {username}
      <br />
    </StyledLink>
  );
};
export default User;
