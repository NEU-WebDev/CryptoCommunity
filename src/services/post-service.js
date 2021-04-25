const USER_API = "https://pure-shore-12573.herokuapp.com/api/users";
const REMOTE_API = "http://localhost:8080/api";

export const createPostForUser = (userId, newPost) =>
    fetch(`${REMOTE_API}/users/${userId}/posts`, {
      method: "POST",
      body: newPost,
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const updatePostForUser = (postId, post) =>
    fetch(`${REMOTE_API}/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        'content-type': 'application/json'

      }
    })
    .then(response => response.json())

export const deletePost = (postId) =>
    fetch(`${REMOTE_API}/posts/${postId}`, {
      method: "DELETE"
    })
    .then(response => response.json())

export const findPostsForUser = (userId) =>
    fetch(`${REMOTE_API}/users/${userId}/userPosts/`, {
      method: "GET"
    })
    .then(response => response.json())

export const findRecentPosts = () =>
    fetch(`${REMOTE_API}/posts`,{
      method: "GET"
    })
    .then(response => response.json())

export default {
  findPostsForUser,
  createPostForUser,
  deletePost,
  updatePostForUser,
  findRecentPosts
};

