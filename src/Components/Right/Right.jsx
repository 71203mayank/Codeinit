import React from "react";
import Cards from "./Cards";
import RightData from './RightData.js';
import './Right.css';

function fun1( val){
    return(

        <Cards  
            rId={val.RdId} 
            rItem={val.RdItem}
            rDate={val.RdDate} 
            rLocation={val.RdLocation}
            rDescription={val.RdDescription}
            rMail={val.RdMail}
            rPh={val.RdPh}
        />
    )
}

function Right(){
    return(
        <div className="Right">
            <div className="window">
                {RightData.map(fun1)}
            </div>

        </div>
    )
}

export default Right;