import './Header.css'

function Header(props){

    const showLogin = () =>{
        props.setLogRegHidden(false)
    }

    const logoutUser = async () => {

        try{
            const responseAPI = await fetch("http://localhost:3000/logout", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${props.token}`
                }
            })

            const responseDataAPI = await responseAPI.json();

            if(!responseAPI.ok){
                console.log(`Logout was unsuccessful: ${responseDataAPI.error}`);
            }
            else{
                props.setToken("");
                props.setLogRegHidden(false);
                props.setToDoHidden(true);
                props.setMessageHidden(true);
                props.setHeaderLoginBtn(false);
                props.setHeaderLogoutBtn(true);
                props.setRegHidden(true);

            }
        }
        catch(error){
            console.log(`Logout was unsuccessful: ${error}`)
        }
    }

    return (
        <header className="header">

            <h1>To-Do List</h1>
            <button className="header-login-btn" hidden={props.headerLoginBtn} onClick={showLogin}>Login</button>
            <button className="header-logout-btn" hidden={props.headerLogoutBtn} onClick={logoutUser}>Logout</button>
            
        </header>
    )
}

export default Header