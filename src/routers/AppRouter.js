import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import MainPage from "../components/pages/MainPage";
import NotFoundPage from "../components/pages/NotFoundPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
