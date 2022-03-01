import React from 'react'
import {renderMessage, authenticate} from '../Authenticator/Authenticator'

const LogIn = () => {
  return (
    <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         {renderMessage("uname")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         {renderMessage("pass")}
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
  )
}

export default LogIn