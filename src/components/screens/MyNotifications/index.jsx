import { connect } from "react-redux";

import MyNotifications from "./MyNotifications";

import { updateTestCounter } from "state/actions";

const mapStateToProps = ({ user }) => {
  return {
    notifications: user.notifications
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
)(MyNotifications);
