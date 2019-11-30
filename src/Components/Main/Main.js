import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {TopFixedNavbar} from '../Shared/Navbar';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import './Main.scss'
import Profile from '../Profile/Profile';
import Form from '../Form/Form';



class Main extends Component {
  constructor(){
		super();
		this.state = {
      redirect: false,
      showForm: false,
      showProfile: true,
      result: String
		}
		
  }
  
  handleResult(result) {
    this.setState({result: result});
  }
  render(){
    return(
      <div className="body">
        <TopFixedNavbar />
        {this.state.showForm ? <Form onResult={this.handleResult}/> : null }
        {this.state.showProfile ? <Profile result={this.result}/> : null }
      </div>
    )
  }
}

export default Main;