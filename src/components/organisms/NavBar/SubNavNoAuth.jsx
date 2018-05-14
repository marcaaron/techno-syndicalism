import React, { Fragment } from "react";

import { ListLink } from "components/atoms";
import { Anonymous, Map, Lightbulb } from "components/atoms/Icons";

const SubNavNoAuth = () => (
  <Fragment>
    <ListLink to="/learn" render={<Lightbulb title="Learn More" />} />
    <ListLink to="/workplaces" render={<Map title="Find My Workplace" />} />
    <ListLink to="/login" render={<Anonymous title="Login or Signup" />} />
  </Fragment>
);

export default SubNavNoAuth;
