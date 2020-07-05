import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/dogs">Dogs</NavLink></li>
      <li><NavLink to="/horses">Horses</NavLink></li>
      <li><NavLink to="/forests">Forests</NavLink></li>
    </ul>
  </nav>
);

export default Nav;