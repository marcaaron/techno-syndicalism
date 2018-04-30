import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/MyUnions"> My Unions </NavLink>

      <NavLink to="/Search"> Search </NavLink>

      <NavLink to="/Create"> Create Union </NavLink>

      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Search" component={Search} />
        <Route path="/Create" component={Create} />
        <Route path="/MyUnions" component={MyUnions} />
      </div>
    </div>
  </Router>
);

const Home = () => <h1>Welcome to Techno-Syndicalism</h1>;

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

const MyUnions = () => (
  <div>
    <div>
      <p>My Unions</p>
      <Link to="/MyUnions/Deliveroo">
        <p>Deliveroo, Newcastle Central</p>
      </Link>
      <Link to="/MyUnions/Burger">
        <p>Burger King, Northumberland Street</p>
      </Link>
    </div>

    <Switch>
      <Route
        exact
        path="/MyUnions/Deliveroo"
        render={name => <Union {..."Deliveroo"} />}
      />
      <Route
        exact
        path="/MyUnions/Burger"
        render={name => <Union {..."Burger King"} />}
      />
    </Switch>
  </div>
);

const Union = props => (
  <div>
    <p>This is the union for {props.name}</p>
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

export default App;
