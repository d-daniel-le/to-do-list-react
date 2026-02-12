import './Register.css'

function Register(){
    return(

        <form className="register">

            <h2>Register</h2>

            <div className="register-username">
                <p>Username/Email</p>
                <input type="email" placeholder="Username/Email"/>
            </div>

            <div className="register-password">
                <p>Password</p>
                <input type="password" placeholder='Password'/>
            </div>
            
            <button className="register-page-btn">Register</button>
        </form>
    )
}

export default Register