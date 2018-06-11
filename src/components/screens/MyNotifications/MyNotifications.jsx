import React from "react";
import PropTypes from "prop-types";

const MyNotifications = ({ notifications, handleClick }) => (
  <div>
    <p>My Notifications</p>

    <div>
      <p>Notifications: {notifications}</p>
      <button name="notifications" value={1} onClick={handleClick}>
        +1
      </button>
      <button name="notifications" value={-1} onClick={handleClick}>
        -1
      </button>
    </div>
  </div>
);

MyNotifications.propTypes = {
  notifications: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default MyNotifications;
