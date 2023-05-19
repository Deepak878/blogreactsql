
import {createContext, useEffect, useState} from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

  const login = async(inputs)=>{
    console.log(inputs);
   const res =  await axios.post("/auth/login", inputs);
   console.log(res);
   setCurrentUser(res.data)
  }
  const logout = async()=>{
   await axios.post("/auth/logout");
   setCurrentUser(null)
  }

  useEffect(()=>{
    console.log(currentUser);
localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return (
<AuthContext.Provider value={{currentUser, login, logout}}>
  {children}
</AuthContext.Provider>
    )
}
