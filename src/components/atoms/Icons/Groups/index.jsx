import React from "react";
import PropTypes from "prop-types";
import { users } from "react-icons-kit/fa";

import { IconBase } from "components/atoms";

const Groups = ({ title }) => <IconBase icon={users} title={title} />;

Groups.propTypes = { title: PropTypes.string };
Groups.defaultProps = { title: "Groups" };

export default Groups;
