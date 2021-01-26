import React from "react";
import { BsPeopleCircle} from "react-icons/bs";

import './insta.css';

function Profile(){
    return(
        <div className="profile-container">
             <div className="profile"><BsPeopleCircle color="grey"size={80}/>
             <p className="placeholder">Your story</p>
             </div>
             <div className="profile"><BsPeopleCircle color="grey"size={80}/>
             <p className="placeholder">aaaaaaa</p>
             </div>
             <div className="profile"><BsPeopleCircle color="grey"size={80}/>
             <p className="placeholder">bbbbbb</p>
             </div>
             <div className="profile"><BsPeopleCircle color="grey"size={80}/>
             <p className="placeholder">cccccc</p>
             </div>

        </div>
    )
}



export default Profile;