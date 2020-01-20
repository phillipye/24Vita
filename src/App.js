import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Team from "./components/Team";
import Term from "./components/Term";


class Home extends React.Component {
  render() {
    return (<div>
      <NavBar/>
      <Header/>
      <About/>
      <Team/>
      <Footer/>
    </div>);
  }
}

class Terms extends React.Component {
  render() {
    return (<div>
      <NavBar/>
      <Term/>
      <Footer/>
    </div>);
  }
}

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/term" component={Terms}/>
        </Switch>
      </BrowserRouter>);
  }
}
