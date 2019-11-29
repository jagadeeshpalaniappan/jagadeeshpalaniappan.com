import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PersonalWebPage from "./PersonalWebPage";
import IntroSlides from "./IntroSlides";
import * as serviceWorker from "./serviceWorker";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.css";
import "./bootstrap-jag-theme.css";
import "./index.css";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={PersonalWebPage} />
      <Route exact path="/intro" component={IntroSlides} />
      <Route exact path="/slides" component={IntroSlides} />
      <Route component={PersonalWebPage} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// ReactDOM.render(<PersonalWebPage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
