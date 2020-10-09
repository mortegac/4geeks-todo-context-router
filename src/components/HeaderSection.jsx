import React from 'react';

import { Jumbotron } from 'react-bootstrap';


const HeaderSection = (props) =>{

    return(

        <Jumbotron>
            <h1>{props.title}</h1>
            <p>
               {props.description}
            </p>
        </Jumbotron>

    )
}



export default HeaderSection;