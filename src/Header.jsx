import './Header.css'

function Header(){
    return (
        <header className="header">

            <h1>To-Do List</h1>
            <button className="header-login-btn">Login</button>
            <button className="header-logout-btn" hidden>Logout</button>
            
        </header>
    )
}

export default Header