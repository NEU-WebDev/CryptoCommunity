import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import postService from '../../services/post-service'
import commentService from '../../services/comment-service'
import NavBar from "../navbar";
import "../../styles/profile-page.css";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({username: '', password: ''})
  const [updatedUserName, setUpdatedUserName] = useState({username: ''})
  const [updatedPassword, setUpdatedPassword] = useState({password: ''})
  const [postsForUser, setPostsForUser] = useState([])
  const [commentsForUser, setCommentsForUser] = useState([])
  let username = "";

  useEffect(() => {
    userService.profile()
    .then((currentUser) => {
      setCurrentUser(currentUser)
      findUserContent(currentUser.username)
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
    userService.updateUserName(newUser, currentUser.username)
    userService.logout();
    history.push("/")
  }

  const findUserContent = (username) => {
    postService.findPostsForUser(username)
    .then((posts) => {
      setPostsForUser(posts)
    })
    commentService.findCommentsForUser(username)
    .then((comments) => {
      console.log(comments)
      setCommentsForUser(comments)
    })
  }

  return(
      <div>
        <NavBar/>
        <div className="register-header">
          <h1>Profile</h1>
          <h4>Welcome {currentUser.username}</h4>
        </div>
        <p>Change Your Username & Password:</p>
        <p>*You'll need to login again after changing your username or password*</p>
        <input
            placeholder="New Username"
            onChange={(event) => setUpdatedUserName(event.target.value)}/>
            <br/>
        <input
            placeholder="New Password"
            onChange={(event) => setUpdatedPassword(event.target.value)}/>
            <br/>
        <button
            onClick={updateUserName}
            className="btn btn-primary">
          Update
        </button>
        <br/>
        <div className="profile-user-posts">
          <h4>My Posts:</h4>
        {
          postsForUser.map((post) => {
            return(
                <li className="list-group-item-post">
                  <Link to={`/forum/post/${post.id}`} className="navbar-brand">{post.title}</Link>
                </li>
            )
          })
        }
        </div>
        <br/>
        <div className="profile-user-posts">
          <h4>My Comments:</h4>
          {
            commentsForUser.map((comment) => {
              return(
                  <li className="list-group-item-post">
                    <Link to={`/forum/post/${comment.associatedPost}`} className="navbar-brand">{comment.body}</Link>
                  </li>
              )
            })
          }
        </div>

        <div className="profile-user-comments"></div>
        <button
            onClick={logout}
            className="btn btn-danger">
          Logout
        </button>
      </div>
  )
}

export default Profile;
