import React from "react";
import Left from "../Left/Left";
import Right from "../Right/Right";
import './User.css';

function User (){
    return(
        <div className="User">
            <Left className='userLeft'/>
            <Right className='userRight'/>
        </div>
    )
}
export default User;