import { useState } from 'react'
import Header from './Header'
import LoginRegister from './Login-Register'
import Message from './Message'
import ToDoList from './ToDoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <LoginRegister />      
      <Message />
      <ToDoList />
    </>
  )
}

export default App
