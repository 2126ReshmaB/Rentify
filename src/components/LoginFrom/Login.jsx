import React from 'react'
import './Login.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
  function handleClick() {
    navigate('/home')
  }
  
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="FirstName" required/>
                <FaUserAlt className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="LastName" required/>
                <FaUserAlt className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Email" required/>
                <FaUserAlt className='icon'/>
            </div>
            <div className="input-box">
                <input type="number" placeholder="PhoneNumber" required/>
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
                
            </div>
            <button type='submit' onClick={handleClick}>Login</button>
            
        </form>
    </div>
  )
}

export default Login