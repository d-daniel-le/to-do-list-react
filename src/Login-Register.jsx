import Login from "./Login"
import Register from "./Register"
import './Login-Register.css'

function LoginRegister(){
    return(
        <div className="login-page-container">
            
            <Login />

            <p>OR</p>
            
            <Register />


        </div>
    )
}

export default LoginRegister