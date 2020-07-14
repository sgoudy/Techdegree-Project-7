import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import {withRouter} from 'react-router';


const Nav = ({match}) => {



  return(
<div>
   <div>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/water" >Water</NavLink></li>
          <li><NavLink to="/horse" >Horse</NavLink></li>
          <li><NavLink to="/forest">Forest</NavLink></li>
        </ul>
      </nav>
    </div>
    <Route path={`${match.path}/water`} />
    <Route path={`${match.path}/horse`} />
    <Route path={`${match.path}/forest`} />
</div>
  );
}

export default withRouter(Nav);