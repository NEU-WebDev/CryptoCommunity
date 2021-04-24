import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import NavBar from "../navbar";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({username: '', password: ''})
  const [updatedUserName, setUpdatedUserName] = useState({username: ''})
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

  const updateUserName = () => {
    const newUser = {
      ...currentUser,
      username: updatedUserName
    }
    userService.updateUserName(currentUser.username, newUser)
    //history.push("/")
  }

  return(
      <div>
        <NavBar/>
        <h1>Profile</h1>
        {JSON.stringify(currentUser)}
        <h3>Welcome {currentUser.username}</h3>
        <p>Change Your Username & Password:</p>
        <p>*You'll need to login again after changing your username or password*</p>
        <input
            placeholder="New Username"
            onChange={(event) => setUpdatedUserName(event.target.value)}/>
        <input
            placeholder="New Password"
            onChange={(event) => setUpdatedUserName(event.target.value)}/>
        <button
            onClick={updateUserName}
            className="btn btn-primary">
          Update
        </button>
        <br/>
        <button
            onClick={logout}
            className="btn btn-danger">
          Logout
        </button>
      </div>
  )
}

export default Profile;
