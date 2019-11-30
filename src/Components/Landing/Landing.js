import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './landing.css';

class Landing extends Component {
	

	// componentDidUpdate(){ 
	// 	
	// }

	render() {
		return(
			<div className="body">
				<button><Link className="landing-button" to="/entrar">Comenzar el test</Link></button>
			</div>
		
		)
	}
}

export default Landing;