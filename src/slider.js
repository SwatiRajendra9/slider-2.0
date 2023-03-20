import React from "react";
import App from './App.css';


function Slider(props) {
    return(
         <div id='reviews'>
            <img id='person-image' src={props.personImage}></img>
            <p id='name'>{props.personName}</p>
            <p id='designation'>{props.personDesignation}</p>
            <p id='job-desc'>{props.personDescription}</p>
            <p id='quotes'>”</p>
        </div>     
    )
}  

export default Slider;