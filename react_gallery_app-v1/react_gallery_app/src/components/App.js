import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


//App Components
import SearchForm from './SearchForm';



const App = () => (
  <BrowserRouter>
  <div className="container">
    <Route path="/" component={SearchForm} />
  </div>
  </BrowserRouter>
)

export default App;