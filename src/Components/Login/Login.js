import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css'
import Logo from '../../img/logo2.png';

class Login extends Component {
  render(){
    return(
      <div className="body">
        <img className="logoImg" src={Logo} alt="logo"/>
        <input className="userInput" placeholder="Ingresa tu correo" type="text"/>
        <input className="paswordInput" placeholder="Ingresa tu contraseña" type="password"/>
        <Link className="login-button" to="/descubre">Ingresar</Link>
      </div>
    )
  }
}

export default Login;