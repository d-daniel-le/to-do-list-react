import { useState, useEffect } from 'react'
import Header from './Header'
import LoginRegister from './Login-Register'
import Message from './Message'
import ToDoList from './ToDoList'
import './App.css'

function App() {
  const [message, setMessage] = useState("Message goes here")
  const [token, setToken] = useState("")
  const [headerLoginBtn, setHeaderLoginBtn] = useState(false)
  const [headerLogoutBtn, setHeaderLogoutBtn] = useState(true)
  const [logRegHidden, setLogRegHidden] = useState(false)
  const [toDoHidden, setToDoHidden] = useState(true)
  const [messageHidden, setMessageHidden] = useState(true)
  const [regHidden, setRegHidden] = useState(true);

  useEffect(()=>{
    const checkToken = localStorage.getItem("authToken");  
    if (checkToken){
      setToken(checkToken);
      setToDoHidden(false);
      setMessageHidden(true);
      setLogRegHidden(true);
      setHeaderLoginBtn(true);
      setHeaderLogoutBtn(false);
    }
    else{
      setToDoHidden(true);
      setMessageHidden(true);
      setLogRegHidden(false);
      setHeaderLoginBtn(false);
      setHeaderLogoutBtn(true);
      
    }  
    
  },[])
  useEffect( () => {
    if (token){
      localStorage.setItem("authToken",token);
    }
  },[token])
  return (
    <>
      <Header headerLoginBtn={headerLoginBtn} headerLogoutBtn={headerLogoutBtn} setLogRegHidden={setLogRegHidden} token={token} setToken={setToken} setToDoHidden={setToDoHidden} setHeaderLoginBtn={setHeaderLoginBtn} setHeaderLogoutBtn={setHeaderLogoutBtn} setMessageHidden={setMessageHidden} regHidden={regHidden} setRegHidden={setRegHidden}/>
      <LoginRegister setMessage={setMessage} token={token} setToken={setToken} logRegHidden={logRegHidden} setLogRegHidden={setLogRegHidden} setHeaderLoginBtn={setHeaderLoginBtn} setHeaderLogoutBtn={setHeaderLogoutBtn} setToDoHidden={setToDoHidden} setMessageHidden={setMessageHidden} regHidden={regHidden} setRegHidden={setRegHidden}/>      
      <Message message={message} messageHidden={messageHidden} setLogRegHidden={setLogRegHidden} setToDoHidden={setToDoHidden} setMessageHidden={setMessageHidden}/>
      <ToDoList token={token} toDoHidden={toDoHidden}/>
    </>
  )
}

export default App
