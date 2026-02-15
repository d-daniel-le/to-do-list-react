import './Register.css'
import { useState } from 'react';

function Register(props){ 
    const [username, getUsername] = useState("");
    const [password, getPassword] = useState("");
    const [hidden, setHidden] = useState(true);
    const [regErrorMessage, setRegErrorMesssage] = useState("");

    const registerUser  = async (event) => {
        event.preventDefault();
        try{
            const responseAPI = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })

            })

            if (!responseAPI.ok){
                const errorInfo = await responseAPI.json();
                setRegErrorMesssage(errorInfo.error ||"Registration is not successful");
                setHidden(false);
            }
            else{
                setHidden(true);
                const responseDataAPI = await responseAPI.json();
                props.setToken(responseDataAPI.token);
                props.setMessage("User has been created successfully");
                props.setLogRegHidden(true);
                props.setHeaderLoginBtn(true);
                props.setHeaderLogoutBtn(false);
                props.setToDoHidden(true)
                props.setMessageHidden(false)
            }

        }
        catch(error){
            setRegErrorMesssage("Uh oh Network Error it seems. Is your server running?");
            setHidden(false);
            console.log(error);
        }
    };

    return(

        <form className="register" onSubmit={registerUser}>

            <h2>Register</h2>

            <p className="register-error" hidden={hidden}>{regErrorMessage}</p>

            <div className="register-username">
                <p>Username/Email</p>
                <input type="email" placeholder="Username/Email" value={username} onChange={(event) =>{getUsername(event.target.value)}}/>
            </div>

            <div className="register-password">
                <p>Password</p>
                <input type="password" placeholder='Password'value={password} onChange={(event) => {getPassword(event.target.value)}}/>
            </div>
            
            <button className="register-page-btn">Register</button>
        </form>
    )
}

export default Register