import React from "react";
import PropTypes from "prop-types";
import { ic_notifications, ic_notifications_off } from "react-icons-kit/md";

import { switchPlural } from "util/functions";
import { IconNav, IconSub } from "components/atoms";

const Notifications = ({ number, title }) =>
  number ? (
    <BellWithNumber number={number} />
  ) : (
    <IconNav icon={ic_notifications_off} title={title} />
  );

const BellWithNumber = ({ number }) => (
  <div>
    <IconNav
      icon={ic_notifications}
      title={`${number} notification${switchPlural(number)}`}
    />
    <IconSub>{number}</IconSub>
  </div>
);

Notifications.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string
};
Notifications.defaultProps = {
  number: 0,
  title: "No notifications"
};

export default Notifications;
