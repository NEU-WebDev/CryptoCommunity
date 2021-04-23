import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import "../../styles/register-page.css";
import NavBar from "../navbar";

const Register = () => {
  const [credentials, setCredentials] = useState({username: '', password: ''})
  const history = useHistory()
  const register = () => {
    userService.register(credentials)
    .then((user) => {
      console.log(user)
      if(user === 0) {
        alert("username already taken")
      } else {
        history.push("/profile")
      }
    })
  }
  return(
      <div>
        <NavBar/>
        <div className="register-header">
        <h1>Register</h1>
          <p>All new accounts agree to the Terms and Conditons. Accounts and posts may be removed by moderators at any time</p>
        </div>
        <input
            value={credentials.username}
            onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
            className="form-control"
            placeholder="username"/>
        <input
            value={credentials.password}
            onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
            className="form-control"
            placeholder="password"/>
        <input
            className="form-control"
            placeholder="validate password"/>
        <button onClick={register} className="btn btn-primary">
          Register
        </button>
        <Link to="/login">
          Login
        </Link>
      </div>
  )
}

export default Register;
