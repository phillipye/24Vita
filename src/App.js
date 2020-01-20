import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Team from "./components/Team";
import Term from "./components/Term";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar/>
            <Header/>
            <About/>
            <Team/>
            <Footer/>
          </Route>
          <Route path="/term">
            <NavBar/>
            <Term/>
            <Footer/>
          </Route>
        </Switch>
      </Router>);
  }
}
