import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>This is the search page</h1>
          </Route>
          <Route path="">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
