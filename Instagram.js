import React from "react";
import { BsPeopleCircle } from "react-icons/bs";
import './insta.css';
function Instagram(props){
    return(
        <div className="main-content">
           <h3 className="title"><BsPeopleCircle color="grey"/>  {props.title}</h3>
           <p className="body">{props.body}</p>
           <img src={props.url} alt=""/>
         
         </div>
    )
}


export default Instagram;