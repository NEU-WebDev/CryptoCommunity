const USER_API = "https://pure-shore-12573.herokuapp.com/api/users";
const REMOTE_API = "http://localhost:8080/api/users";

const profile = () => {
  return fetch(`${REMOTE_API}/profile`, {
    method: "POST",
    credentials: "include"
  }).then(response => response.json())
}

const findProfile = (profileId) => {
  return fetch(`${REMOTE_API}/profile/${profileId}`, {
    method: "POST",
  }).then(response => response.json())
}

const checkIfAdmin = (userId) => {
  return fetch(`${REMOTE_API}/${userId}/admin`, {
    method: "POST",
  }).then(response => response.json())
}

const login = (credentials) => {
  return fetch(`${REMOTE_API}/login`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
}

const register = (credentials) => {
  return fetch(`${REMOTE_API}/register`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
}

const logout = () => {
  return fetch(`${REMOTE_API}/logout`, {
    method: "POST",
    credentials: "include"
  }).then(response => response.json())
}

const updateUserName = (newUser, username) => {
  return fetch(`${REMOTE_API}/${username}/update`, {
    method: "PUT",
    body: JSON.stringify(newUser),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
}

export default {
  register, login, logout, profile, updateUserName, checkIfAdmin
}