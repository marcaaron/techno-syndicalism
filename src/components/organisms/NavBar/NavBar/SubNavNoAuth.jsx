import React, { Fragment } from "react";

import { ListLink, TextVisibility } from "components/atoms";
import { Anonymous, Map, Lightbulb } from "components/atoms/Icons";

import { NavItemContainer } from "styles";

const SubNavNoAuth = () => (
  <Fragment>
    <ListLink to="/learn" render={<LearnMore />} />
    <ListLink to="/groups" render={<Workplaces />} />
    <ListLink to="/login" render={<Login />} />
  </Fragment>
);

const LearnMore = () => (
  <NavItemContainer>
    <Lightbulb title="Learn More" />
    <TextVisibility>Learn&nbsp;More</TextVisibility>
  </NavItemContainer>
);

const Workplaces = () => (
  <NavItemContainer>
    <Map title="Find My Group" />
    <TextVisibility>Find&nbsp;My&nbsp;Group</TextVisibility>
  </NavItemContainer>
);

const Login = () => (
  <NavItemContainer>
    <Anonymous title="Login" />
    <TextVisibility>Login&nbsp;></TextVisibility>
  </NavItemContainer>
);

export default SubNavNoAuth;
