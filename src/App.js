import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";


import './App.css';
import Header from './Components/Header'
import Banner from './App/Banner'
import About from './App/About'
import Service from './App/Service'
import Contact from './App/Contact'

import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
    
    <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Banner} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Service} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
    </div>
  );
}

export default App;
