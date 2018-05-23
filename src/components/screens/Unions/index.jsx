import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

var UnionData = {
  deliverooNEW: {
    name: "Deliveroo, Newcastle Central",
    size: 34,
    userMemberOf: true
  },
  burgerNOR: {
    name: "Burger King, Northumberland Street",
    size: 22,
    userMemberOf: true
  },
  mcdonaldsBYK: {
    name: "McDonalds, Byker",
    size: 28,
    userMemberOf: false
  }
};

class Unions extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLink to="/MyUnions"> My Unions </NavLink>

          <NavLink to="/Search"> Search </NavLink>

          <NavLink to="/Create"> Create Union </NavLink>

          <Switch>
            <Route exact path="/Search" component={Search} />
            <Route exact path="/Create" component={Create} />
            <Route exact path="/MyUnions/" component={MyUnions} />
            <Route path="/MyUnions/:id" component={MyUnions} />
            <Route path="/" component={MyUnions} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Search = () => (
  <div>
    <input type="text" placeholder="Workplace" />
    <nav>
      <Link to="/Search/Results">Search</Link>
    </nav>
    <div>
      <Route path={"/Search/Results"} component={Results} />
    </div>
  </div>
);

const Results = () => (
  <div>
    <p>Results:</p>

    <p>Greggs, Byker</p>

    <p>Topman, Eldon Square</p>

    <p>Deliveroo, Newcastle</p>

    <p>Burger King, Northumberland Street</p>
  </div>
);

const Create = () => (
  <div>
    <input type="text" placeholder="Union Name" />
    <input type="text" placeholder="Description" />
    <button>Make Union</button>
  </div>
);

const MyUnions = ({ match }) => (
  <div>
    {match.params.id ? (
      <Union id={match.params.id} />
    ) : (
      <div>
        <p>My Unions</p>
        <Link to="/MyUnions/deliverooNEW">
          <p>Deliveroo, Newcastle Central</p>
        </Link>
        <Link to="/MyUnions/burgerNOR">
          <p>Burger King, Northumberland Street</p>
        </Link>
      </div>
    )}
  </div>
);

const Union = props => (
  <div>
    <p>This is the union for {UnionData[props.id].name}.</p>
    <button>
      <p>Members</p>
    </button>
    <button>
      <p>Chat</p>
    </button>
    <button>
      <p>Funds</p>
    </button>
    <button>
      <p>Union Info</p>
    </button>
  </div>
);

export default Unions;
