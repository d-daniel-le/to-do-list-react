import { useState } from 'react'
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


  // localStorage.setItem(token)

  return (
    <>
      <Header headerLoginBtn={headerLoginBtn} headerLogoutBtn={headerLogoutBtn} setLogRegHidden={setLogRegHidden}/>
      <LoginRegister setMessage={setMessage} token={token} setToken={setToken} logRegHidden={logRegHidden} setLogRegHidden={setLogRegHidden} setHeaderLoginBtn={setHeaderLoginBtn} setHeaderLogoutBtn={setHeaderLogoutBtn} setToDoHidden={setToDoHidden} setMessageHidden={setMessageHidden}/>      
      <Message message={message} messageHidden={messageHidden}/>
      <ToDoList token={token} toDoHidden={toDoHidden}/>
    </>
  )
}

export default App
