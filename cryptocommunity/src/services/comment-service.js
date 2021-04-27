const USER_API = "https://pure-shore-12573.herokuapp.com/api/users";
const REMOTE_API = "http://localhost:8080/api";

export const createCommentForPost = (postId, newComment, username) =>
    fetch(`${REMOTE_API}/posts/${postId}/newComment/${username}`, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())


export const deleteComment = (commentId) =>
    fetch(`${REMOTE_API}/posts/comments/${commentId}/delete`, {
      method: "DELETE"
    })
    .then(response => response.json())

export const findCommentsForPost = (postId) =>
    fetch(`${REMOTE_API}/posts/${postId}/comments`)
    .then(response => response.json())


export const findCommentsForUser = (uid) =>
    fetch(`${REMOTE_API}/users/${uid}/myComments`)
    .then(response => response.json())

export const updateCommentForPost = (commentId, newComment) =>
    fetch(`${REMOTE_API}/comments/${commentId}/edit`, {
      method: "PUT",
      body: JSON.stringify(newComment),
      headers: {
        'content-type': 'application/json'

      }
    })
    .then(response => response.json())


export default {
  findCommentsForPost,
  createCommentForPost,
  deleteComment,
  updateCommentForPost,
  findCommentsForUser
};