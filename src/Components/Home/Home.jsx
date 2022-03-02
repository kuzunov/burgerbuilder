import React, {Context, createContext,useState} from 'react'
import LogIn from '../LogIn/LogIn'
import {authService} from '../Authenticator/Authenticator'
import Cookies from 'js-cookie'

export const AuthContext = React.createContext();

export default function Home() {
const [user,setUser] = useState({id:null, name:'Anonymous'});
let currUser = (Cookies.get('currentUser')!==undefined)? JSON.parse(Cookies.get('currentUser')):user;

const handleLogout = (e) => {
  authService.logOut();
  setUser({id:null, name:'Anonymous'})
  e.preventDefault();
}
  return ( <>
   
    <div>Build your best burger! {currUser.name}</div>
      
      <AuthContext.Provider value={[user,setUser]}>
        <LogIn setUser = {setUser}/>
        <button onClick={handleLogout}> LOGOUT</button>
      </AuthContext.Provider>
    </>
  )
}
