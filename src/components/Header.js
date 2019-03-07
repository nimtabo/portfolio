import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (

  <header className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
    <div className="container">
      <div className="navbar-header">
        <NavLink className="navbar-brand" to="/">Nicholas Mtabo</NavLink>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav ml-auto">
          <NavLink to="/work" className="nav-item nav-link is-active" exact={true}><i className="fas fa-code"></i> Work<span className="sr-only">(current)</span></NavLink>
          <NavLink to="/about" className="nav-item nav-link is-active"><i className="fas fa-user-circle"></i> About</NavLink>
          <NavLink to="/profile" className="nav-item nav-link is-active"><i className="fas fa-address-card"></i> Contacts</NavLink>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
