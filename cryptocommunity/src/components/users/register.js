import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import NavBar from "../navbar";
import "../../styles/register-page.css";

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
          Already have an account? <Link className="login-link" to="/login">
          Login Here
        </Link>
        </div>
        <input
            value={credentials.username}
            onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
            className="form-control"
            placeholder="Username"/>
        <input
            value={credentials.password}
            onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
            className="form-control"
            placeholder="Password"/>
        <nav className="navbar navbar-dark bg-dark">
        <button onClick={register} className="btn btn-primary">
          Register
        </button>
        </nav>
      </div>
  )
}

export default Register;
