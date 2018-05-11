import React, { Component, Fragment } from "react";

import { Switch, Route } from "react-router-dom";

import { Footer, NavBar } from "../components/features";

// Routes
import {
  Account,
  Home,
  LandingPage,
  LearnMore,
  MyDashboard,
  MySettings,
  MyWorkplaces,
  Profiles,
  Thread,
  Unions,
  Workplaces
} from "../components/screens";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/account" component={Account} />
          <Route exact path="/learn" component={LearnMore} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/unions" component={Unions} />
          <Route exact path="/workplaces" component={Workplaces} />
          <Route exact path="/home/dashboard" component={MyDashboard} />
          <Route exact path="/home/workplaces" component={MyWorkplaces} />
          <Route exact path="/home/settings" component={MySettings} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/threads/:id" component={Thread} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
