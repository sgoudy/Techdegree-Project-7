import React from 'react';
import Photo from '../Photo';
import {WaterGifs} from '../../data/water';

const Water = (props) => {

    let gifs=[];
    gifs = WaterGifs.map((gif) => {
           return <Photo 
                    farm={gif.farm}
                    server={gif.server}
                    id={gif.id}
                    secret={gif.secret}
                    key={gif.id}
            />    
    }); 
    return (
    <div className="photo-container">
        <ul> 
                {gifs}
        </ul>
    </div>
    )
}

export default Water;