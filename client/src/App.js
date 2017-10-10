import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Panel from './components/Panel';
import Main from './pages/Main';
import Saved from './pages/Saved';

const App = () =>
  <Router>
    <div>
      <Nav />
      <Panel />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/books" component={Main} />
        <Route component={Saved} />
      </Switch>
    </div>
  </Router>;

export default App;
