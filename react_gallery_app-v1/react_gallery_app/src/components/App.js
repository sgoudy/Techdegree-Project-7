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
      loading: true,
      url: '/'
    }

    componentDidMount(){
        this.performSearch();
        
    }

    performSearch=(query='dogs')=>{
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            this.setState({
                query: query,
                gifs: response.data.photos.photo,
                loading: false,
                url: this.props.location.pathname        
            });
          })
          .catch(error => {
            console.log('Error fetching and parsing results', error);
          });
    }

    componentDidUpdate() {
      if (this.props.location.pathname !== this.state.url) {
        this.performSearch(this.props.location.pathname);
      } else if (this.state.url === this.props.url){
        return;
      }
    }

  render(){

    return (
      <div className="container">
      <Switch>
      
          <Route exact path="/">
            <SearchForm onSearch={this.performSearch}/>
            <Nav onClick={this.performSearch}/>
            {
              (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoContainer gifs={this.state.gifs} query={this.state.query}/>
            } 
          </Route>
        
          <Route path="/">
            <SearchForm onSearch={this.performSearch}/>
            <Nav onClick={this.performSearch}/>
            {
              (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoContainer gifs={this.state.gifs} query={this.state.query}/>
            } 
          </Route>

        </Switch>
      </div>
    )
  }
}

export default withRouter(App);