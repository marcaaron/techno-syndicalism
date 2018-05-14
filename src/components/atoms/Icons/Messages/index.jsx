import React from "react";
import PropTypes from "prop-types";
import { ic_mail_outline, ic_inbox } from "react-icons-kit/md";

import { switchPlural } from "util/functions";
import { IconBase } from "components/atoms";

const Messages = ({ number, title }) =>
  number ? (
    <MailWithNumber number={number} />
  ) : (
    <IconBase icon={ic_inbox} title={title} />
  );

const MailWithNumber = ({ number }) => (
  <div>
    <IconBase
      icon={ic_mail_outline}
      title={`${number} message${switchPlural(number)}`}
    />
    <sub style={{ margin: "auto 15px auto -15px" }}>{number}</sub>
  </div>
);

Messages.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string
};
Messages.defaultProps = {
  number: 0,
  title: "No messages"
};

export default Messages;
