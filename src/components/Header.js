import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header className="header container">
    <NavLink className="header__item" to="/work" activeClassName="is-active" exact={true}>Work</NavLink>
    <NavLink className="header__item" to="/profile" activeClassName="is-active">Nicholas Mtabo</NavLink>
  </header>
);

export default Header;