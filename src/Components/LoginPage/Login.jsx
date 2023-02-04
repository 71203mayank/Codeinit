import React from "react";
import './Login.css';

function Login(){
    return(
        <div className="LogPage">
                <div className="forAvinash">
                    <div>
                        <img src='/Assets/lnf2.png' alt='loading'></img>
                    </div>
                </div>
            <div className="Login">
                <div className="details">
                    <div className="detailDiv">

                        <form className="forms">
                            <div className="email formDiv">
                                <lable for='mail' > NITC Mail *<br></br> </lable>
                                <input type='text' id='mail' required pattern='.+@nitc.ac.in'></input>
                            </div>
                            <div className="passWord formDiv">
                                <lable for='pw' > Password *<br></br> </lable>
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