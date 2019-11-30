import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './landing.css';
import Carousel from 'nuka-carousel';

class Landing extends Component {
	

	// componentDidUpdate(){ 
	// 	
	// }

	render() {
		return(
			<div className="body">
				<Carousel className="CarrouselContainer">
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=info1" alt="info de introduccion"/>
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=info2" alt="info de introduccion"/>
					<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=info3" alt="info de introduccion"/>
      	</Carousel>
				<Link className="landing-button" to="/entrar">Comenzar el test</Link>
			</div>
		
		)
	}
}

export default Landing;