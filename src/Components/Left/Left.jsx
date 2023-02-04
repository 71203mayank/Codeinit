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
                        {/* <div>
                        </div> */}
                        </div>
                        {/* <div><h2>Contact Details</h2></div>
                        <div className="LeftEmail leftSub">
                                    <lable for='Lmail' > E-Mail *<br></br> </lable>
                                    <input type='text' id='Lmail' className='subInput' required pattern='.+@nitc.ac.in'></input>
                        </div>
                        <div className="phNumber leftSub">
                                    <lable for='number' > Phone No * <br></br></lable>
                                    <input type='text' id='number' className='subInput' required pattern='.+@nitc.ac.in'></input>
                        </div> */}
                        {/* <div className="LeftFormBtn"> */}
                            <input type='submit' value='Add' className="AddBtn"></input>
                        {/* </div> */}

                        </form>
                    </div>

            </div>
            {/* <div className="LeftData">

            </div> */}

        </div>
    )
}
export default Left