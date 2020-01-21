import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Team from "./components/Team";
import Term from "./components/Term";

const Home = () => <div><NavBar/><Header/><About/><Team/><Footer/></div>;
const Terms = () => <div><NavBar/><Term/><Footer/></div>;
const ContactPage = () => <div><NavBar/><Contact/><Footer/></div>;

export default class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/term" component={Terms}/>
          </Switch>
        </ScrollToTop>
      </HashRouter>);
  }
}
