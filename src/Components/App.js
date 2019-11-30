import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faUser, faBookOpen, faLock, faBell, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Landing from './Landing/Landing';
import Main from './Main/Main';
import Form from './Form/Form';
import './App.css';

library.add(faUsers, faUser, faBookOpen, faLock, faBell, faChevronLeft);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Landing}/>
          <Route path="/entrar" component={Main}/>
          <Route path="/form" component={Form}/>
        </Router>
      </div>
    );
  }
}

export default App;
