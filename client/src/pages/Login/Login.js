import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  login } from '../../redux/actions/driver'
import './Login.css'
const Login = ({ history }) => {
  const [driver, setDriver] = useState({})
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value })
  }
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(driver, history))
  }
  
 
 
  
  return (
    <div>
      <div className="login-wrap">
        <div className="login-html">
          <form onSubmit={handleLogin}>
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab"></label>

            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    email
                  </label>
                  <input
                    id="user"
                    type="text"
                    className="input"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    name="password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="group">
                  <input
                    id="check"
                    type="checkbox"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="check">
                    <span className="icon" /> <h4>Keep me Signed in</h4>
                  </label>
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    defaultValue="Sign In"
                  />
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Login
