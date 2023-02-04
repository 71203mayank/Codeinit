import React from "react";
import './MainPage.css';

function MainPage(){
    return(
        <div className="MainPage">
            <div className="cube">
                <div className="top side ">&</div>
                <div className="front side cubeBtn">LOST</div>
                <div className="left side cubeBtn">FOUND</div>
                {/* <div className="bottom side"></div> */}
            </div>
        </div>
    )
}

export default MainPage;