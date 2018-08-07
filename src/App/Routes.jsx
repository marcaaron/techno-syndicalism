import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute } from "components/atoms";
import * as Screens from "components/screens";

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Screens.Login} />
    <Route exact path="/signup" component={Screens.Signup} />
    <Route exact path="/learn" component={Screens.Learn} />
    <Route exact path="/groups" component={Screens.Groups} />
    <Route exact path="/groups/:slug" component={Screens.Group} />
    <Route exact path="/users/:username" component={Screens.Users} />
    <AuthRoute exact path="/create-group" component={Screens.CreateGroup} />
    <AuthRoute exact path="/update-group/:id" component={Screens.UpdateGroup} />
    <AuthRoute exact path="/home" component={Screens.Home} />
    <AuthRoute exact path="/home/messages" component={Screens.MyMessages} />
    <AuthRoute
      exact
      path="/home/notifications"
      component={Screens.MyNotifications}
    />
    <AuthRoute exact path="/threads/:id" component={Screens.Thread} />
    <Route path="/" component={Screens.Landing} />
  </Switch>
);

export default Routes;
