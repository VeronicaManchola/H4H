import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './landing.css';
import Carousel from 'nuka-carousel';
import Img1 from '../../img/1.png';
import Img2 from '../../img/2.png';
import Img3 from '../../img/3.png';

class Landing extends Component {
	

	// componentDidUpdate(){ 
	// 	
	// }

	render() {
		return(
			<div className="body">
				<Carousel className="CarrouselContainer m-auto" renderCenterLeftControls={({ previousSlide }) => (
						<button onClick={previousSlide} className="slideBtn"><FontAwesomeIcon className="nav-icons flecha" icon="chevron-left"/></button>
					)}
					renderCenterRightControls={({ nextSlide }) => (
						<button onClick={nextSlide} className="slideBtn"><FontAwesomeIcon className="nav-icons flecha" icon="chevron-right"/></button>
					)}>
					<div className="slideCard">
						<img className="imgLanding" src={Img1} alt="info de introduccion"/>
						<p className="title">¿Qué es Sana Tus Finanzas?</p>
						<p className="text">Es una guía hacia una buena salud financiera, entregando herramientas para lograr metas de vivienda, salud y educación.	</p>
					</div>		
					<div className="slideCard">
						<img className="imgLanding" src={Img2} alt="info de introduccion"/>
						<p className="title">Pilares de Sana Tus Finanzas</p>
						<p className="text">Es una guía hacia una buena salud financiera, entregando herramientas para lograr metas de vivienda, salud y educación.	</p>
					</div>		
					<div className="slideCard">
						<img className="imgLanding" src={Img3} alt="info de introduccion"/>
						<p className="title">Beneficios de Sana tus Finanzas</p>
						<p className="text">Es una guía hacia una buena salud financiera, entregando herramientas para lograr metas de vivienda, salud y educación.	</p>
					</div>		
      	</Carousel>
				<Link className="landing-button" to="/entrar">Comenzar el test</Link>
			</div>
		
		)
	}
}

export default Landing;