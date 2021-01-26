import React from "react";
import {FaCamera,  FaTelegramPlane} from "react-icons/fa";
import './insta.css'
 function Instahead(){
     return(
         <div className = "header">
           <div className="cam"> <FaCamera size={40}/></div>
             <div className="heading"><h2 >Instagram</h2></div>
             <div className="toplogo"><FaTelegramPlane  size={40} /></div>
            
         </div>
     )
 }
 export default Instahead;