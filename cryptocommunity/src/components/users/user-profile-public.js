import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import postService from '../../services/post-service'
import commentService from '../../services/comment-service'
import coinService from '../../services/coin-service'
import NavBar from "../navbar";
import "../../styles/profile-page.css";

const UserProfile = () => {
  const [postsForUser, setPostsForUser] = useState([])
  const [commentsForUser, setCommentsForUser] = useState([])
  const [coinsForUser, setCoinsForUser] = useState([])
  const {username} = useParams();

  useEffect(() => {
      findUserContent(username)
    },[username])

  const history = useHistory()

  const findUserContent = (username) => {
    postService.findPostsForUser(username)
    .then((posts) => {
      setPostsForUser(posts)
    })
    commentService.findCommentsForUser(username)
    .then((comments) => {
      setCommentsForUser(comments)
    })
    coinService.findCoinsForUser(username)
    .then((coins) => {
      setCoinsForUser(coins)
    })
  }

  return(
      <div>
        <NavBar/>
        <div className="register-header">
          <h1>{username}'s Profile</h1>
        </div>
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
        <div className="profile-user-comments">
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
        <div className="profile-user-coins">
          <h4>My Coins:</h4>
          {
            coinsForUser.map((coin) => {
              return(
                  <li className="list-group-item-post">
                    <Link to={`/details/${coin.coinName}`} className="navbar-brand">{coin.coinName}</Link>
                  </li>
              )
            })
          }
        </div>
        <div className="profile-user-comments"></div>
        <div className="footer">
          <a href="https://www.privacypolicies.com/live/a9ccc0fc-fdec-4404-a260-4f009950b239">Privacy Policy</a>
          <p>Vincent Luo & Richard A. Castaneda <br/>
            Northeastern University CS5610</p>
        </div>
      </div>
  )
}

export default UserProfile;