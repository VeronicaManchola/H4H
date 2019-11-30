import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './landing.css';

class Landing extends Component {
	constructor(){
		super();
		this.state = {
			redirect: false
		}
		this.endVideo = this.endVideo.bind(this)
	}

	// componentDidUpdate(){ 
	// 	this.endVideo.bind(this)
	// }

  
	endVideo(e){
		console.log(e)
		this.setState({	
			redirect: true
		})
		//console.log(this.state)
		
	}
	// renderRedirect = () => {
  //   if (this.state.redirect === true) {
	// 		console.log('deberia redirigir a login')
	// 		return <Redirect to='/login' />
	// 	}
  // }
	
	render() {
		return(
			<div className="body">
				<div className="videoContainer">
					<iframe src="https://www.dailymotion.com/embed/video/x7506bn?autoplay=1?muted=1" allowfullscreen allow="autoplay"/>
					<Link className="landing-button" to="/login">Conócenos</Link>
				</div>
			</div>
		
		)
	}
}

export default Landing;