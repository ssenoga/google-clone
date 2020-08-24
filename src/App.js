import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
