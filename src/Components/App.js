import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faUser, faBookOpen, faLock, faBell, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Landing from './Landing/Landing';
import Main from './Main/Main';
import './App.css';

library.add(faUsers, faUser, faBookOpen, faLock, faBell, faChevronLeft,  faChevronRight);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Landing}/>
          <Route path="/entrar" component={Main}/>
        </Router>
      </div>
    );
  }
}

export default App;
