import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import NavBar from "../navbar.js";
import postService from "../../services/post-service"
import commentService from "../../services/comment-service";
import userService from "../../services/user-service";

const ForumPost = () => {
  const [currentUser, setCurrentUser] = useState({username: '', password: ''})
  const [commentsForPost, setCommentsForPost] = useState({})
  const [newComment, setNewComment] = useState({})

  useEffect(() => {
    userService.profile()
    .then((currentUser) => {
      setCurrentUser(currentUser)
    })
  }, [])

  const createComment = () => {
    commentService.createCommentForPost(currentUser, newComment)
  }

  const findComments = () => {
    commentService.findCommentsForPost()
    .then((Results) => {
      setCommentsForPost(Results);
    }, [])
  }

  return(
      <>
        <div className="container-fluid">
          <div className="cryptocommunity-header">
            <h1>CryptoCommunity Forums</h1>
            <h4>Engage in Conversation and Learn More About Crypto</h4>
          </div>
          <NavBar/>
          <h1>PLACEHOLDER: POST DISPLAYED HERE</h1>
          <div className="recent-posts">
            <ul className="list-group">
              {/*{*/}
              {/*  recentPosts.map((post) => {*/}
              {/*    return(*/}
              {/*        <li className="list-group-item">*/}
              {/*          {post.title}*/}
              {/*          {post.body}*/}
              {/*          {post.author}*/}
              {/*        </li>*/}
              {/*    )*/}
              {/*  })*/}
              {/*}*/}
            </ul>
          </div>
          <div className="form-group">
            <label htmlFor="commentInput">Comment:</label>
            <textarea
                onChange={(event) => setNewComment(event.target.value)}
                className="form-control"
                id="commentInput"
                rows="2"></textarea>
          </div>
          <button
              onClick={createComment}
              className="btn btn-success">
            Post Comment
          </button>
          <div className="footer">
            <a href="https://www.privacypolicies.com/live/a9ccc0fc-fdec-4404-a260-4f009950b239">Privacy Policy</a>
            <p>Vincent Luo & Richard A. Castaneda <br/>
              Northeastern University CS5610</p>
          </div>
        </div>
      </>
  )
}

export default ForumPost;