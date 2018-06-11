import { connect } from "react-redux";

import MyMessages from "./MyMessages";

import { updateTestCounter } from "state/actions";

const mapStateToProps = ({ user }) => {
  return {
    messages: user.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: e => {
      const { name, value } = e.target;
      dispatch(updateTestCounter(name, value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMessages);
