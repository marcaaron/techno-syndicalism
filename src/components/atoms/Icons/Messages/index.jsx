import React from "react";
import PropTypes from "prop-types";
import { ic_mail_outline, ic_inbox } from "react-icons-kit/md";

import { switchPlural } from "util/functions";
import { IconNav, IconSub } from "components/atoms";

const Messages = ({ number, title }) =>
  number ? (
    <MailWithNumber number={number} />
  ) : (
    <IconNav icon={ic_inbox} title={title} />
  );

const MailWithNumber = ({ number }) => (
  <div>
    <IconNav
      icon={ic_mail_outline}
      title={`${number} message${switchPlural(number)}`}
    />
    <IconSub>{number}</IconSub>
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
