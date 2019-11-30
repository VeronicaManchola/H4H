import React, { Component } from 'react';
import Result from '../../img/RESULT.jfif'

class Profile extends Component {
  constructor(props){
		super(props);
		this.state = {
		}
		
  }
  render(){
    return(
      <div>
        <img className="imgResult" src={Result} alt="img resultado" ></img>
      </div>
    )
  }
}

export default Profile;