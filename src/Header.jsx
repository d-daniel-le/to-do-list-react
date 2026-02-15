import './Header.css'

function Header(props){

    return (
        <header className="header">

            <h1>To-Do List</h1>
            <button className="header-login-btn" hidden={props.headerLoginBtn}>Login</button>
            <button className="header-logout-btn" hidden={props.headerLogoutBtn}>Logout</button>
            
        </header>
    )
}

export default Header