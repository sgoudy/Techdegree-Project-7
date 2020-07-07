import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';

//App Components
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import SearchForm from './SearchForm';
import apiKey from './config';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  } 

  componentDidMount(){
    this.performSearch();
  }

  performSearch = (query='red heeler') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          gifs: response.data.photos.photo,
          loading: false
        });
      })
  }

  render() { 
    console.log(this.state.gifs)
    return (
    <BrowserRouter>
      <div className="container">
      <Route path="/" >
        <SearchForm onSearch={this.performSearch}/>
        <Nav onClick={this.performSearch}/>
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <PhotoContainer data={this.state.gifs}/> 
        }      
      </Route>
              
      </div>
    </BrowserRouter>
    );
  }
}

export default App;