import React from "react";
import {FaTelegramPlane,FaRegBookmark} from "react-icons/fa";
import {BsHeart} from 'react-icons/bs';
import { BiMessageRounded} from "react-icons/bi";

function Border(){
    return(
        <div className="bottom">
            <div className="border-item"> <BsHeart  size={30}/></div>
            <div className="border-item"><BiMessageRounded  size={30}/></div>
            <div className="border-item"> <FaTelegramPlane  size={30}/></div>
            <div className="border-bookmark"><FaRegBookmark  size={30}/></div>
        </div>
    )
}





export default Border;