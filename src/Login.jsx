import { useState } from 'react'
import './Login.css'

function Login(props){
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [logErrorMessage, setLogErrorMessage] = useState("");
    const [hidden, setHidden] = useState(true);

    const loginUser = async (event) => {
        event.preventDefault();
        try{

            const responseAPI = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": loginUsername,
                    "password": loginPassword
                })
            })
    
            const responseDataAPI = await responseAPI.json();
    
            if (!responseAPI.ok){
                setLogErrorMessage(responseDataAPI.error)
                setHidden(false)
            }
            else{
                props.setToken(responseDataAPI.token)
                props.setMessageHidden(false);
                props.setMessage("Login was successful");
                props.setToDoHidden(true);
                props.setHeaderLoginBtn(true);
                props.setHeaderLogoutBtn(false);
                props.setLogRegHidden(true);
            }
            
        }
        catch (error){
            setRegErrorMesssage("Uh oh Network Error it seems. Is your server running?");
            setHidden(false);
            console.log(error);
        }
    }
    

    return(

        <form className="login" onSubmit={loginUser}>

            <h2>Login</h2>
            <p className='log-error' hidden={hidden}>{logErrorMessage}</p>

            <div className="login-username">
                <p>Username/Email</p>
                <input type="text" placeholder="Username/Email" value={loginUsername} onChange={(event) =>{setLoginUsername(event.target.value)}}/>
            </div>

            <div className="login-password">
                <p>Password</p>
                <input type="password" placeholder='Password' value={loginPassword} onChange={(event) =>{setLoginPassword(event.target.value)}}/>
            </div>

            <button className="login-page-btn">Login</button>
        </form>
    )
}

export default Login