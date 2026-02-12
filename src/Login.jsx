import './Login.css'

function Login(){
    return(

        <form className="login">

            <h2>Login</h2>

            <div className="login-username">
                <p>Username/Email</p>
                <input type="text" placeholder="Username/Email"/>
            </div>

            <div className="login-password">
                <p>Password</p>
                <input type="password" placeholder='Password'/>
            </div>

            <button className="login-page-btn">Login</button>
        </form>
    )
}

export default Login