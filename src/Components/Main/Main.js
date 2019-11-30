import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './Main.scss'
import Profile from '../Profile/Profile';
import Form from '../Form/Form';


class Main extends Component {
  constructor(){
		super();
		this.state = {
			redirect: false,
			showProfile: false,
		}
		
	}
  render(){
    console.log(this.state.showProfile)
    return(
      <div className="body">
        <Form/>
        {this.state.showProfile ? <Profile /> : null }
      </div>
    )
  }
}

export default Main;