import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
				<Profile style={{display: this.state.showProfile === true ? 'block' : 'none' }}/>
      </div>
    )
  }
}

export default Main;