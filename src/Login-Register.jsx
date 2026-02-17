import { useState } from "react"
import Login from "./Login"
import Register from "./Register"
import './Login-Register.css'

function LoginRegister(props){

    return(
        <div className="login-page-container" hidden={props.logRegHidden}>
            
            <Login setMessage={props.setMessage} token={props.token} setToken={props.setToken} setLogRegHidden={props.setLogRegHidden} setHeaderLoginBtn={props.setHeaderLoginBtn} setHeaderLogoutBtn={props.setHeaderLogoutBtn} setToDoHidden={props.setToDoHidden} setMessageHidden={props.setMessageHidden}/>

            <p>OR</p>
            
            <Register setMessage={props.setMessage} token={props.token} setToken={props.setToken} setLogRegHidden={props.setLogRegHidden} setHeaderLoginBtn={props.setHeaderLoginBtn} setHeaderLogoutBtn={props.setHeaderLogoutBtn} setToDoHidden={props.setToDoHidden} setMessageHidden={props.setMessageHidden} regHidden={props.regHidden} setRegHidden={props.setRegHidden}/>


        </div>
    )
}

export default LoginRegister