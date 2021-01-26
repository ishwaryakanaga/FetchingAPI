import React from "react";

import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUserAlt } from "react-icons/fa";
import './insta.css';

function Bottom(){
    return(
        <div className="foot">
            <div className="home"><FaHome size={30}/></div>
            <div className="search"><FaSearch size={30} /></div>
            <div className="plus"><FaPlusSquare size={30} /></div>
            <div className="heart"><FaHeart size={30}/></div>
            <div className="user"><FaUserAlt size={30}/></div>
        </div>
    )
}




export default Bottom;