import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from "../view/home";
import About from "../view/about";
import Product from "../view/product";
import Navbar from "../components/navbar/navbar";


function Routers() {
  return (
    <Router
    basename="/"
    >
      <Switch>
      <Route exact path="/">
          <Navbar />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Product">
          <Product />
        </Route>
      </Switch>
  </Router>
  );
}

export default Routers;
