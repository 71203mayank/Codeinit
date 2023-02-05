import React from "react";
import Cards from "./Cards";
import RightData from './RightData.js';
import './Right.css';
import { getAllItems } from "../../api/fetch";

function fun1( val){
    return(

        <Cards  
            rId={val[5]} 
            rItem={val[0]}
            rDate={val[4]} 
            rLocation={val[2]}
            rDescription={val[3]}
        />
    )
}

async function Right(){
    let data= await getAllItems().then((data)=>{
        return(
            <div className="Right">
                <div className="window">
                    {(data['lost']).map(fun1)}
                </div>
    
            </div>
        )
    });
    return data;
    
}

export default Right;