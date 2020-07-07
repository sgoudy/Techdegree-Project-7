import React from 'react';
import {NavLink, Route} from 'react-router-dom';

const Nav = (props) => {

  const getData=(e)=>{
    const value = e.target.textContent;
    props.onClick(value);
  }

  return(
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/dogs" onClick={getData}>Dogs</NavLink></li>
      <li><NavLink to="/horses" onClick={getData}>Horses</NavLink></li>
      <li><NavLink to="/forests" onClick={getData}>Forests</NavLink></li>
    </ul>
  </nav>
  );
}

export default Nav;