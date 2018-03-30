import React from "react";
// import { Route, Router, Switch } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Test from "./components/test.jsx";
import Main from "./components/Main.jsx";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" exact component={Main} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </Router>
  );
};
