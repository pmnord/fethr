import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Regal from "./pages/regal/regal.component";

const RegalPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>REGAL PAGE </h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img src={`${require("./assets/logo.png")}`} alt="fethr logo" />
      </Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/regal" component={RegalPage} />
      </Switch>
    </div>
  );
}

export default App;
