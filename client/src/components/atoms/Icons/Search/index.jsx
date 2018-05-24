import React from "react";
import PropTypes from "prop-types";
import { search } from "react-icons-kit/feather";

import { IconBase } from "components/atoms";

const Search = ({ title }) => <IconBase icon={search} title={title} />;

Search.propTypes = { title: PropTypes.string };
Search.defaultProps = { title: "Search" };

export default Search;
