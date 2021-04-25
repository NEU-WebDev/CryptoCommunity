import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import NavBar from "../navbar";
import "../../styles/profile-page.css";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({username: '', password: ''})
  useEffect(() => {
    userService.profile()
    .then((currentUser) => {
      setCurrentUser(currentUser)
    })
  }, [])
  const history = useHistory()
  const logout = () => {
    userService.logout();
    history.push("/")
  }
  return(
      <div>
        <NavBar/>
        <div className="profile-header">
          <h1>Profile</h1>
          Hello {currentUser.username}
        </div>
        <nav className="navbar navbar-dark bg-dark">
        <button
            onClick={logout}
            className="btn btn-primary">
          Logout
        </button>
        </nav>
      </div>
  )
}

export default Profile;
