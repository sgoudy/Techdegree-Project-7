import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";

//App Components
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';

//Search features
import axios from 'axios';
import apiKey from './config';


 class App extends Component {

    state={
      query: '',
      gifs: [],
      loading: true
    }

    componentDidMount(){
        this.performSearch();    
    }

    performSearch=(query='dingo')=>{
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            this.setState({
                query: query,
                gifs: response.data.photos.photo,
                loading: false
            });
          })
          .catch(error => {
            console.log('Error fetching and parsing results', error);
          });
    }

    

    render(){
      console.log(this.state.loading)
    
    return (
      <div className="container">
      <Switch>

          <Route exact path="/">
            <SearchForm onSearch={this.performSearch} query={this.state.query} />
            <Nav />
            {
              (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoContainer gifs={this.state.gifs} />
            } 
          </Route>
        
          <Route path="/search/:query" >
            <SearchForm onSearch={this.performSearch} query={this.state.query}/>
            <Nav />
            {
              (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoContainer gifs={this.state.gifs} />
            } 
          </Route>
          
          <Route path="/:query" >
            <SearchForm onSearch={this.performSearch} query={this.state.query}/>
            <Nav onClick={this.performSearch}/>
            {
              (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoContainer gifs={this.state.gifs} />
            } 
          </Route>
          
         

        </Switch>
      </div>
    )
  }
}

export default withRouter(App);