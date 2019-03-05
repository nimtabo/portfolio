import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (

  <header className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
    <div className="container">
      <div className="navbar-header">
        <NavLink className="navbar-brand" to="/">Nicholas Mtabo</NavLink>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav ml-auto">
          <NavLink to="/work" className="nav-item nav-link is-active" exact={true}><i class="fas fa-code"></i> Work<span class="sr-only">(current)</span></NavLink>
          <NavLink to="/profile" className="nav-item nav-link is-active"><i class="fas fa-user-circle"></i> About</NavLink>
          <NavLink to="/profile" className="nav-item nav-link is-active"><i class="fas fa-address-card"></i> Contacts</NavLink>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
