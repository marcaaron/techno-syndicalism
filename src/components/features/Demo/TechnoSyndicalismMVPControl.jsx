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

      <Switch>
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Create" component={Create} />
        <Route exact path="/MyUnions/" component={MyUnions} />
        <Route path="/MyUnions/:name" component={MyUnions} />
        <Route path="/" component={Home} />
      </Switch>
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

const MyUnions = ({ match }) => (
  <div>
    {match.params.name ? (
      <Union name={match.params.name} />
    ) : (
      <div>
        <p>My Unions</p>
        <Link to="/MyUnions/Deliveroo">
          <p>Deliveroo, Newcastle Central</p>
        </Link>
        <Link to="/MyUnions/Burger">
          <p>Burger King, Northumberland Street</p>
        </Link>
      </div>
    )}
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
