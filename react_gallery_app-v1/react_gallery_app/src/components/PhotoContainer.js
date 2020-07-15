import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


class PhotoContainer extends Component {

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
      else if(results.length === 0){
          return (
              <NotFound />
          )
        } 

    return (
        <div className="photo-container">
            <h2>{this.props.query} Gifs</h2>
                <ul>
                    {gifs } 
                </ul>
        </div>
    );
    }
}

export default PhotoContainer;