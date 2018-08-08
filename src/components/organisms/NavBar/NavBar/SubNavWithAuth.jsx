import React, { Fragment } from "react";
import PropTypes from "prop-types";

import {
  Image,
  ListLink,
  TextVisibility,
  ButtonSignout
} from "components/atoms";
import { Messages, Notifications } from "components/atoms/Icons";

import { NavItemContainer } from "styles";

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
    <ListLink
      to={`/users/${props.username}`}
      render={<UserView {...props} />}
    />
    <ButtonSignout />
  </Fragment>
);

const UserView = props => {
  const imageStyle = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginLeft: 15
  };
  return (
    <NavItemContainer>
      <Image alt={props.username} url={props.imageUrl} style={imageStyle} />
      <TextVisibility title={props.username}>{props.username}</TextVisibility>
    </NavItemContainer>
  );
};

UserSubNav.propTypes = {
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  messages: PropTypes.number,
  notifications: PropTypes.number
};

export default UserSubNav;
