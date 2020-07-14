import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


class PhotoContainer extends Component {

    // state={
    //     query: this.props.query,
    //     gifs: this.props.gifs
    // }

    render(){

      const results = this.props.gifs;
      let gifs;
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
              }
      else {
          return (
              <NotFound />
          )
      }

    return (

        <div className="photo-container">
        <h2>Results!</h2>
            <ul>
                {gifs } 
            </ul>
        </div>
    );
    }
}

export default PhotoContainer;