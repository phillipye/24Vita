import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Team from "./components/Team";
import Term from "./components/Term";

const Home = () => <div><NavBar/><Header/><About/><Team/><Footer/></div>;
const Terms = () => <div><NavBar/><Term/><Footer/></div>;

export default class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <ScrollToTop>
          <Switch>
            <Route exact path="/" onUpdate={() => window.scrollTo(0, 0)} component={Home}/>
            <Route path="/term" onUpdate={() => window.scrollTo(0, 0)} component={Terms}/>
          </Switch>
        </ScrollToTop>
      </HashRouter>);
  }
}
