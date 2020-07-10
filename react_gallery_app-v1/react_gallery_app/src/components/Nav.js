import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {

  return(
    <div>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/water" data="water" >Water</NavLink></li>
          <li><NavLink to="/horses" data="horses">Horses</NavLink></li>
          <li><NavLink to="/forests" data="forests">Forests</NavLink></li>
        </ul>
      </nav>
    </div>
  

  );
}

export default Nav;