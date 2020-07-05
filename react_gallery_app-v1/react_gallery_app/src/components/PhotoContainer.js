import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotoContainer = props => {

    const results = props.data;
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
        gifs = <NotFound />
    }

    return(
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    { gifs}
                </ul>
            </div>
    )
};

    
export default PhotoContainer;