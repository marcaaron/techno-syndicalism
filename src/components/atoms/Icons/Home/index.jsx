import React from "react";
import PropTypes from "prop-types";
import { ic_home } from "react-icons-kit/md";

import { IconBase } from "components/atoms";

const Home = ({ title }) => <IconBase icon={ic_home} title={title} />;

Home.propTypes = { title: PropTypes.string };
Home.defaultProps = { title: "Home" };

export default Home;
