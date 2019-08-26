import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import logo from "./logo.svg";
import Index from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

import AppHeader from "./components/AppHeader";


import "bootstrap/dist/css/bootstrap.css";

// styles
// import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
// import "./assets/css/now-ui-kit.min.css";
// import "./assets/css/now-ui-kit.css.map";
import "./assets/demo/demo.css";

import "./App.css";

function App() {
  return (
    <>
    <AppHeader/>
      <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route path="/projects" render={props => <ProjectsPage {...props} />}/>
        <Route path="/resume" render={props => <ResumePage {...props} />}/>
        <Route path="/contact" render={props => <ContactPage {...props} />}/>
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;
