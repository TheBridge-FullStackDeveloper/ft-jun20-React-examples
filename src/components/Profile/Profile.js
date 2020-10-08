import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {

  render() {
    return (
      <div>
        <h2>Esta es la pagina de perfil de usuario</h2>
        <img src="./media/pelican.png" alt="pelicano"/>
      </div>
      
    );
  }
}

export default Profile;