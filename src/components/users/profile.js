import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import postService from '../../services/post-service'
import NavBar from "../navbar";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({username: '', password: ''})
  const [updatedUserName, setUpdatedUserName] = useState({username: ''})
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    userService.profile()
    .then((currentUser) => {
      setCurrentUser(currentUser)
      findPostForUser(currentUser.username)
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

  const findPostForUser = (username) => {
    postService.findPostsForUser(username)
    .then((response) => {
      console.log(response)
      setUserPosts(response)
      console.log(userPosts)
    })
  }


  return(
      <div>
        <NavBar/>
        <h1>Profile</h1>
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
        <h4>Your Posts:</h4>
        {
          userPosts.map((post) => {
            return(
                <li className="list-group-item">
                  {post.title}
                  {post.body}
                </li>
            )
          })
        }
        <button
            onClick={logout}
            className="btn btn-danger">
          Logout
        </button>
      </div>
  )
}

export default Profile;
