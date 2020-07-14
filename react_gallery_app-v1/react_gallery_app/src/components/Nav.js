import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import {withRouter} from 'react-router';
// import PhotoContainer from './PhotoContainer';
// import App from './App';

const Nav = ({match}) => {



  return(
<div>
   <div>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/water" >Water</NavLink></li>
          <li><NavLink to="/horses" >Horses</NavLink></li>
          <li><NavLink to="/forests">Forests</NavLink></li>
        </ul>
      </nav>
    </div>
    <Route path={`${match.path}/water`} />
    <Route path={`${match.path}/horses`} />
    <Route path={`${match.path}/forests`} />
</div>
  );
}

export default withRouter(Nav);