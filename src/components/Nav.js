import React from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router';


const Nav = () => {

    return(
      <div>
          <nav className="main-nav">
            <ul>
              <li><NavLink to="/water" query="water">Water</NavLink></li>
              <li><NavLink to="/horse" query="horses">Horse</NavLink></li>
              <li><NavLink to="/forest">Forest</NavLink></li>
            </ul>
          </nav>
        </div>   
    );
}

export default withRouter(Nav);