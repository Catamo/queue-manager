import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ServerView from "../views/ServerView";

export default class AppRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ServerView} />
        </Switch>
      </BrowserRouter>
    );
  }
}
