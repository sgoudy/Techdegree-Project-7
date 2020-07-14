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
        <h1>Uh oh!, looks like the page you're looking for does not exist.</h1>
            <img src="/lost.png" alt="Lost" />
    </div>
       
    )
   
}

export default DoesNotExist;