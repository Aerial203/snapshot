import {useState, useEffect} from "react"
import './App.css'
import Login from './components/LoginRegister/Login'
import Navigation from './components/Navigation/Navigation'
import Snapshot from "./components/Snapshot/Snapshot"

function App() {
  const [isValid, setIsValid] = useState({
    username: false,
    password: false,
    isFirst: true
  })  

  useEffect(() => {
    const storageUserLoggedIn = localStorage.getItem("isLoggedIn")
    if (storageUserLoggedIn === "1") {
      setIsValid((prevInp) => {
        return {
          ...prevInp, 
          username: true, 
          password: true,
          isFirst: false
        }
      })
    }
  }, [])

  const loginHandler = (data) => {
    setIsValid(prevInp => {
      return {...prevInp, username: data.username.includes("@"), password: data.password.trim().length > 6, isFirst: false}
    })
    if (data.username.includes("@") && data.password.trim().length > 6)  localStorage.setItem("isLoggedIn", "1")
  }

  const handleLogout = (e) => {
    localStorage.removeItem("isLoggedIn")
    setIsValid((prevInp) => {
      return {
        ...prevInp, 
        username: false, 
        password: false,
        isFirst: true
      }
    })
  }
  return (
    <div className="App">
      <Navigation isAddLogout={isValid} onLogout={handleLogout}/>
      {!(isValid.username && isValid.password) ? <Login onGetData={loginHandler} isValid={isValid}/> : <Snapshot />}
    </div>
  )
}

export default App
