import React, { Component } from "react";
import styled from "styled-components";

import { Switch, Route } from "react-router-dom";

import { NavBar } from "../components/features";

// Routes
import {
  Home,
  LandingPage,
  LearnMore,
  MyDashboard,
  MySettings,
  MyWorkplaces,
  Profiles,
  Unions,
  Workplaces
} from "../components/screens";

class App extends Component {
  render() {
    return (
      <Display>
        <NavBar />
        <Switch>
          <Route exact path="/learn" component={LearnMore} />
          <Route exact path="/unions" component={Unions} />
          <Route exact path="/workplaces" component={Workplaces} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/my/workplaces" component={MyWorkplaces} />
          <Route exact path="/my/dashboard" component={MyDashboard} />
          <Route exact path="/my/settings" component={MySettings} />
          <Route path="/my" component={Home} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Display>
    );
  }
}

const Display = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
