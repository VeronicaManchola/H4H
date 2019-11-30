import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import logo  from '../../img/logo.svg';

export class BottomFixedNavbar extends Component {
  render(){
    return(
      <div className="navbar-wrapper">
        <Nav className="nav fixed-bottom">
          <NavLink href="/comunidad"><FontAwesomeIcon className="nav-icons" icon="users" /></NavLink>
          <NavLink href="/descubre"><FontAwesomeIcon className="nav-icons" icon="book-open"/></NavLink>
          <NavLink href="/perfil"><FontAwesomeIcon className="nav-icons" icon="user"/></NavLink>
        </Nav>
      </div>
    )
  }
}

export class TopFixedNavbar extends Component {
  render(){
    return(
      <div className="topBar-container m-auto">
        <Nav className="nav fixed-top">
          <img className="logo" src={logo} alt="logo"></img>
        </Nav>
      </div>
    )
  }
}