import React from "react";
import "./Left.css";

function Left(){
    return (
        <div className="Left">
            <div className="LeftHead">
                <div>Lost</div>
                <div>Found</div>

            </div>
            <div className="LeftForm">
                    <form className="">
                    <div className="items ">
                                <lable for='itemsType' >Select Item * </lable>
                                <select id='itemsType' name="itemsType">
                                    <option value='Mobiles'>Mobile</option>
                                    <option value='Laptops'>Laptop</option>
                                    <option value='Watches'>Watch</option>
                                    <option value='Headphones'>Headphone</option>
                                    <option value='Keys'>Keys</option>
                                    <option value='Bags'>Bags and Wallets</option>
                                    <option value='Misc'>Miscellaneous</option>
                                </select>
                                {/* <input type='text' id='mail' required pattern='.+@nitc.ac.in'></input> */}
                    </div>
                    <div className="date">
                                <lable for='dateField' >  Date * </lable>
                                <input type='date' id='dateField' required></input>
                    <div className="location">
                                {/* <lable for='discp' >discription * </lable> */}
                                <div>Location :</div>
                                {/* <input type='text' id='discp' required pattern='.+@nitc.ac.in'></input> */}
                                <textarea name="discription" id="locate" cols="30" rows="3"></textarea>
                    </div>
                    <div className="description">
                                {/* <lable for='discp' >discription * </lable> */}
                                <div>Description:</div>
                                {/* <input type='text' id='discp' required pattern='.+@nitc.ac.in'></input> */}
                                <textarea name="description" id="descp" cols="30" rows="8"></textarea>
                    </div>
                    <div>
                        {/* <input type='image' alt='submit'></input> */}
                    </div>
                    </div>
                    <div><h2>Contact Details</h2></div>
                    <div className="LeftEmail">
                                <lable for='Lmail' > E-Mail * </lable>
                                <input type='text' id='Lmail' required pattern='.+@nitc.ac.in'></input>
                    </div>
                    <div className="phNumber">
                                <lable for='number' > Phone No * </lable>
                                <input type='text' id='number' required pattern='.+@nitc.ac.in'></input>
                    </div>

                    <input type='submit' value='add'></input>

                    </form>

            </div>
            <div className="LeftData">

            </div>

        </div>
    )
}
export default Left