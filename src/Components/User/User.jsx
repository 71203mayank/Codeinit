import React from "react";
import Left from "../Left/Left";
import Right from "../Right/Right";
import './User.css';

function User (){
    return(
        <div className="User">
            <Left/>
            <Right/>
        </div>
    )
}
export default User;