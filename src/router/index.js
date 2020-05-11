import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/" exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
