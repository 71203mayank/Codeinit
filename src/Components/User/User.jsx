import React, { useEffect, useState } from "react";
import Left from "../Left/Left";
// import Right from "../Right/Right";
import './User.css';
import { getAllItems } from "../../api/fetch";
import Cards from "../Right/Cards";
import './Right.css';


function User (){

    const [products, setProducts] = useState({'lost':[]});

    useEffect(() => {
        getAllItems().then((data)=>{
            setProducts(data);
        })
    }, [])
    return(
        <div className="User">
            <Left className='userLeft'/>
            {/* <Right className='userRight'/> */}
            
            <div className="Right">
                <div className="window">
                    {(products['lost']).map((product)=>(
                        <Cards  
                        rId={product[5]} 
                        rItem={product[0]}
                        rDate={product[4]} 
                        rLocation={product[2]}
                        rDescription={product[3]}
                        />)
                    )}
                </div>
    
            </div>
        </div>
    )
}
export default User;