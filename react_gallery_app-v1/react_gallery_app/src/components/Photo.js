import React from 'react';


const Photo = props => {
   
    console.log(props)
    const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`
    
    return(
    <ul>
        <li>
            <img src={url} alt="" />
        </li>
    </ul> 
    )
    };
    
export default Photo;