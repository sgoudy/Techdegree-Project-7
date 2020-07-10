import React, {Component} from 'react';
import Photo from './Photo';

import axios from 'axios';
import apiKey from './config';
import NotFound from './NotFound';


class PhotoContainer extends Component {

    state={
        query: this.props.data,
        gifs: [],
        loading: this.props.loading
    }

    componentDidMount = ()=>{
        this.performSearch();
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.setHistory();
    //     this.setState({
    //         query: this.query.value,
    //         loading: true
    //     })
    //     e.currentTarget.reset();
    // }; 

    // setHistory =() =>{
    //     let topic = this.query.value;
    //     let path = `/${topic}`;
    //     this.props.history.push(path);
        
    // }

    performSearch = (query= this.props.data) =>{
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
            this.setState({
                query: query,
                gifs: response.data.photos.photo,
                loading: false,
            });
            });
    }
    
    notFound = () =>{
        return(
            <NotFound />
        )
    }

    render(){
        let gifs =[];
        const results = this.state.gifs;
        
        // console.log(this.state.gifs)
        console.log(this.props)
        
        if (results.length > 0){
                    gifs = results.map(gif => 
                        <Photo 
                        farm={gif.farm} 
                        server={parseInt(gif.server)} 
                        id={parseInt(gif.id)} 
                        secret={gif.secret}
                        key={parseInt(gif.id)}
                        />
                        );
        } else {
            this.notFound();
        }
    
    return (
        <div className="photo-container">
            <ul>
                {gifs}   
            </ul>
        </div>
    );
    }
}

export default PhotoContainer;