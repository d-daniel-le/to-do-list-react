import Login from "./Login"
import Register from "./Register"

function LoginRegister(){
    return(
        <div className="login-page-container">
            
            <Login />

            <p>Or</p>
            
            <Register />


        </div>
    )
}

export default LoginRegister