import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Avatar, ListLink } from "components/atoms";
import { Messages, Notifications } from "components/atoms/Icons";

const UserSubNav = props => (
  <Fragment>
    <ListLink
      to="/home/notifications"
      render={<Notifications number={props.notifications} />}
    />
    <ListLink
      to="/home/messages"
      render={<Messages number={props.messages} />}
    />
    <StyledListItem title={props.username}>{props.username}</StyledListItem>
    <StyledListItem title={props.username}>
      <Avatar url={props.imageUrl} />
    </StyledListItem>
  </Fragment>
);

UserSubNav.propTypes = {
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  messages: PropTypes.number,
  notifications: PropTypes.number
};

const StyledListItem = styled.li`
  margin: 0;
`;

export default UserSubNav;
