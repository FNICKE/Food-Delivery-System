import React, { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{ currState }</h2>
          <img onClick={()=>setShowLogin(false)} src={ assets.cross_icon } alt="" />
        </div>
        <div className="login-popup-inputs">
          
              {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
              <input type="email" placeholder='Your Email' required />
              <input type="password" placeholder='Password' required />

        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to term of Use & Privacy Policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
