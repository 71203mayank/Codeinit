import React from "react";
import './Login.css';

function Login(){
    return(
        <div>

            <div className="Login">
                <div className="details">
                    <div className="detailDiv">

                        <form className="forms">
                            <div className="email formDiv">
                                <lable for='mail' > NITC Mail * </lable>
                                <input type='text' id='mail' required pattern='.+@nitc.ac.in'></input>
                            </div>
                            <div className="passWord formDiv">
                                <lable for='pw' > Password * </lable>
                                <input type='text' id='pw' required></input>
                            </div>
                            <div className="button formDiv" style={{display:'flex'}}>
                                <div style={{margin:'auto'}} className="formBtn">Login</div>
                            </div>
                        </form>
                        <div className="google">
                            <div>Sign In</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;