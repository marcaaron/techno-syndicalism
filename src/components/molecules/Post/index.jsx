import React from "react";
import PropTypes from "prop-types";
import { dateToString } from "util/functions";

import {
  StyledLink,
  StyledArticle,
  UserText,
  TitleText,
  BodyText
} from "styles";

const Post = ({
  id,
  user: { username },
  title,
  content,
  createdAt,
  comments
}) => (
  <StyledArticle>
    <TitleText>{title} </TitleText>
    <BodyText>{content} </BodyText>
    <UserText>
      posted by: <StyledLink to={`/users/${username}`}>{username}</StyledLink>{" "}
      at {dateToString(createdAt)}
    </UserText>
  </StyledArticle>
);

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
};

export default Post;
