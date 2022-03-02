import React from 'react'
import { authService } from '../Authenticator/Authenticator';


const LogIn = ({setUser}) => {

  const handleLogIng = (e) => {
    setUser(authService.logIn(e.target['uname'].value, e.target['pass'].value));
  }
  return (
    <div className="form">
     <form onSubmit = {handleLogIng}>
         <label>Username </label>
         <input type="text" name="uname" required />
         <label>Password </label>
         <input type="password" name="pass" required />
         <input type="submit" />
     </form>
   </div>
  )
}

export default LogIn