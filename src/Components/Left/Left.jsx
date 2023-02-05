import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { postAd } from "../../api/post";
import { userIdContext } from "../../App";
import "./Left.css";

function Left(){
    const { user } = useContext(userIdContext);
    const [uid, setUid] = user;

    const [cat, setCat] = useState('L');

    const addPost = async (e) => {
        e.preventDefault()
        let otype = document.getElementById('itemsType').value
        let date = document.getElementById('dateField').value
        let loc = document.getElementById('locate').value
        let desc = document.getElementById('descp').value

        let data = {
            'otype': otype,
            'date': date,
            'loc': loc,
            'description': desc,
            "uid": uid,
            "cat": cat
        }

        console.log(data);
        await postAd(data);
    }
    
    return (
        <div className="Left">
            <div className="LeftHead">
                <div className="LeftSubHead">Lost</div>
                <div className="LeftSubHead">Found</div>

            </div>
            <div className="LeftForm">
                    <div className="SubDivForm">

                        <form className="subForm">
                        <div className="items leftSub">
                                    <div>
                                        <lable for='itemsType' >Select Item *<br></br></lable>
                                    </div>
                                    <div>

                                        <select id='itemsType' name="itemsType" className="Extra">
                                            <option value='Mobiles'>Mobile</option>
                                            <option value='Laptops'>Laptop</option>
                                            <option value='Watches'>Watch</option>
                                            <option value='Headphones'>Headphone</option>
                                            <option value='Keys'>Keys</option>
                                            <option value='Bags'>Bags and Wallets</option>
                                            <option value='Misc'>Miscellaneous</option>
                                        </select>
                                    </div>
                                   
                        </div>
                        <div className="date leftSub">
                                    <lable for='dateField' >  Date * <br></br> </lable>
                                    <input type='date' id='dateField'  required className="Extra"></input>
                            <div className="location leftSub">
                                        <div>Location :</div>
                                        <textarea name="discription" id="locate" cols="30" rows="2" className='subInput'></textarea>
                            </div>
                            <div className="description leftSub">
                                        <div>Description:</div>
                                        <textarea name="description" className='subInput' id="descp" cols="30" rows="4"></textarea>
                            </div>
                        
                        </div>
                        

                        <input type='submit' value='add' onClick={addPost} className='AddBtn'></input>

                        </form>
                    </div>

            </div>
            

        </div>
    )
}
export default Left;