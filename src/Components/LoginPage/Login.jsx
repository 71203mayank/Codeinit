import React from "react";
import { useContext } from "react";
// import { Router } from "react-router-dom";
import { newUser } from "../../api/post";
import { userIdContext } from "../../App";
import './Login.css';
import {motion} from "framer-motion"
// import {Link} from "react-router-dom";


function Login(){
    const { user } = useContext(userIdContext);
    const [ uid, setUid ] = user;

    const submit = async (e) => {
        e.preventDefault()
        let text = document.getElementById("mail").value
        
        if(text != '') {
            let name = text.split('@')[0].toUpperCase()
            let data = {
                "name": name,
                "email": text
            }

            let resp = await newUser(data);
            console.log(resp.data['uid'])
            setUid(resp.data['uid'])
            
        }
    } 

    return(
        <div className="LogPage">
                <motion.div className="forAvinash"
                    initial={{y:'100vh'}}
                    animate={{y:0,}}
                    transition={{type:'spring',delay: 0.5,stiffness:120}}
                >
                    <div>
                        <img src='/Assets/lnf2.png' alt='loading'></img>
                    </div>
                </motion.div>
            <div className="Login">
                <div className="details">
                    <div className="detailDiv">

                        <form className="forms" onSubmit={submit}>
                            <div className="email formDiv">
                                <lable htmlFor='mail' > NITC Mail *<br></br> </lable>
                                <input type='text' id='mail' required pattern='.+@nitc.ac.in' className="LogInput"></input>
                            </div>
                            <div className="passWord formDiv">
                                <lable htmlFor='pw' > Password *<br></br> </lable>
                                <input type='password' id='pw' required className="LogInput"></input>
                            </div>
                            <div className="button formDiv" style={{display:'flex'}}>
                                {/* <div style={{margin:'auto'}} className="formBtn">Login</div> */}
                                {/* <Link to='/user'><input type="submit"></input></Link> */}
                                <input type="submit" className="formBtn"></input>
                            </div>
                        </form>
                        {/* <div className="google">
                            <div>Sign In</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;