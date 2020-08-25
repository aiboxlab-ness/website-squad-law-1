import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutPage from "./aboutus";
import ContactPage from "./contact";
import Process from "./process";
import Roles from "./roles";
import Tools from "./tools";
import Artifacts from "./artifacts.js";
import Product from "./product";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutus" component={AboutPage} />
    <Route path="/product" component={Product} />
    <Route path="/process" component={Process} />
    <Route path="/artifacts" component={Artifacts} />
    <Route path="/roles" component={Roles} />
    <Route path="/tools" component={Tools} />
    <Route path="/contact" component={ContactPage} />
  </Switch>
);

export default Main;
