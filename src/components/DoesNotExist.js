import React from 'react';
import {Link} from 'react-router-dom'

const DoesNotExist = ()=> {

    return(
    <div>
        <Link to="/">
            <button type="button" className="button">
                <h3><em><strong>Take me home!</strong></em></h3>
            </button>
        </Link>
        <br />
        <h1>Uh oh!, looks like the page you're looking for does not exist.</h1>
        <iframe src="https://giphy.com/embed/11JTxkrmq4bGE0" width="480" height="369" frameBorder="0" className="giphy-embed" allowFullScreen title="Lost Cat"></iframe>
        <p><a href="https://giphy.com/gifs/cat-computer-working-11JTxkrmq4bGE0">via GIPHY</a></p>
        
    </div>  
    ) 
}

export default DoesNotExist;