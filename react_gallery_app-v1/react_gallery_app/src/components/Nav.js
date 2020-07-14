import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import {withRouter} from 'react-router';

const Nav = () => {

  return(

    <div>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/water" >Water</NavLink></li>
          <li><NavLink to="/horses" >Horses</NavLink></li>
          <li><NavLink to="/forests">Forests</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default withRouter(Nav);