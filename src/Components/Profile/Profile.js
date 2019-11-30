import React, { Component } from 'react';
import {BottomFixedNavbar, TopFixedNavbar} from '../Shared/Navbar';
class Profile extends Component {
  render(){
    return(
      <div>
        <TopFixedNavbar />
        <p>Este es Profile</p>
        <BottomFixedNavbar/>
      </div>
    )
  }
}

export default Profile;