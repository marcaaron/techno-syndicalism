import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({
  component: Component,
  userInfo: { isAuthenticated },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.any.isRequired,
  userInfo: PropTypes.object
};

export default AuthRoute;
