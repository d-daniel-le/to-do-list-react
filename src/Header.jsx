import './Header.css'

function Header(props){

    const showLogin = () =>{
        props.setLogRegHidden(false)
    }

    return (
        <header className="header">

            <h1>To-Do List</h1>
            <button className="header-login-btn" hidden={props.headerLoginBtn} onClick={showLogin}>Login</button>
            <button className="header-logout-btn" hidden={props.headerLogoutBtn}>Logout</button>
            
        </header>
    )
}

export default Header