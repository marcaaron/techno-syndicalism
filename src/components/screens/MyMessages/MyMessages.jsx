import React from "react";
import PropTypes from "prop-types";

const MyMessages = ({ messages, handleClick }) => (
  <div>
    <p>My Messages</p>
    <div>
      <p>Messages: {messages}</p>
      <button name="messages" value={1} onClick={handleClick}>
        +1
      </button>
      <button name="messages" value={-1} onClick={handleClick}>
        -1
      </button>
    </div>
  </div>
);

MyMessages.propTypes = {
  messages: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default MyMessages;
