import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import NavBar from "../navbar.js";
import postService from "../../services/post-service"
import commentService from "../../services/comment-service";
import userService from "../../services/user-service";

const ForumPost = () => {
  const {postId} = useParams();
  const [currentUser, setCurrentUser] = useState({id: '', username: '', password: ''})
  const [commentsForPost, setCommentsForPost] = useState([])
  const [newComment, setNewComment] = useState([])
  const [currentPost, setCurrentPost] = useState([])
  const [isAdmin, setIsAdmin] = useState(false);
  let buttonClicks = 0;

  const history = useHistory()

  useEffect(() => {
    userService.profile()
    .then((currentUser) => {
      setCurrentUser(currentUser)
      userService.checkIfAdmin(currentUser.id)
      .then((isAdmin) => {
        setIsAdmin(isAdmin)
        console.log(isAdmin)
      })
    })
    retrievePost()
    findComments()
  }, [buttonClicks])

  const retrievePost = () => {
    postService.findPostById(postId)
    .then((post) => {
      setCurrentPost(post)
    })
  }

  const createComment = () => {
    commentService.createCommentForPost(postId, newComment,
        currentUser.username)
    buttonClicks++
    console.log(buttonClicks)
  }

  const deletePost = () => {
    postService.deletePost(postId);
    history.push("/forum")
  }

  const findComments = () => {
    commentService.findCommentsForPost(postId)
    .then((Results) => {
      setCommentsForPost(Results);
    })
  }

  return (
      <>
        <div className="container-fluid">
          <div className="cryptocommunity-header">
            <h1>CryptoCommunity Forums</h1>
            <h4>Engage in Conversation and Learn More About Crypto</h4>
          </div>
          <NavBar/>
          <h1>{currentPost.title}</h1>
          <p>{currentPost.body}</p>
          <h4>{currentPost.author}</h4>
          <div className="post-comments">
            <div className="comment-header">
              <h3>Post Comments:</h3>
            </div>
            <ul className="list-group-comments">
              {
                commentsForPost.map((post) => {
                  return (
                      <li className="list-group-item-comments">
                        {post.body}<br/>
                        On {post.postDate} By:
                        {post.author}
                      </li>
                  )
                })
              }
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
          {isAdmin &&
          <button
            onClick={deletePost}
            className="btn btn-danger">
            Delete Post
          </button>
          }
          <div className="footer">
            <a href="https://www.privacypolicies.com/live/a9ccc0fc-fdec-4404-a260-4f009950b239">Privacy
              Policy</a>
            <p>Vincent Luo & Richard A. Castaneda <br/>
              Northeastern University CS5610</p>
          </div>
        </div>
      </>
  )
}

export default ForumPost;
