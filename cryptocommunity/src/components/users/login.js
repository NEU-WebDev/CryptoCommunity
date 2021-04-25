import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import "../../styles/login-page.css";
import NavBar from "../navbar";


const Login = () => {
  const [credentials, setCredentials] = useState({username: '', password: ''})
  const history = useHistory()
  const login = () => {
    userService.login(credentials)
    .then((user) => {
      if(user === 0) {
        alert("login failed, try again")
      } else {
        history.push("/profile")
      }
    })
  }

  return(
      <div>
        <NavBar/>
        <div className="login-header">
          <h1>Login</h1>
          Don't have an account yet? <Link className="register-link" to="/register">
          Register Here
        </Link>
        </div>
        <input
            placeholder={credentials.username}
            onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
            className="form-control"
            placeholder="Username"/>
        <input
            placeholder={credentials.password}
            onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
            className="form-control"
            placeholder="Password"/>
        <nav className="navbar navbar-dark bg-dark">
        <button
            onClick={login}
            className="btn btn-primary">
          Login
        </button>
          <button
              onClick={login}
              className="btn btn-primary">
            Administrator Login
          </button>
        </nav>
      </div>
  )
}

export default Login;
