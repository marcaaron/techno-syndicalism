import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Groups extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLink to="/search"> Search </NavLink>
          <NavLink to="/create"> Create Group </NavLink>
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/create" component={Create} />
            <Route path="/" component={MyGroups} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Search = () => (
  <div>
    <input type="text" placeholder="Search for a Group" />
    <nav>
      <Link to="/search/results">Search</Link>
    </nav>
    <div>
      <Route path={"/search/results"} component={Results} />
    </div>
  </div>
);

const Create = () => (
  <div>
    <input type="text" placeholder="Group Name" />
    <input type="text" placeholder="Description" />
    <button>Create a New Group</button>
  </div>
);

const MyGroups = props => <div />;

const Results = props => <div />;

export default Groups;
