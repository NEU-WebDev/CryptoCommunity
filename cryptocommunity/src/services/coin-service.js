const USER_API = "https://pure-shore-12573.herokuapp.com/api/users";
const REMOTE_API = "http://localhost:8080/api";

export const addCoinToUser = (userId, coinName) =>
    fetch(`${REMOTE_API}/coins/${userId}/add/${coinName}`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())


export const removeCoinFromUser = (userId, coinName) =>
    fetch(`${REMOTE_API}/coins/${userId}/remove/${coinName}`, {
      method: "DELETE"
    })
    .then(response => response.json())

export const findCoinsForUser = (uid) =>
    fetch(`${REMOTE_API}/coins/${uid}`)
    .then(response => response.json())

export const findUsersForCoin = (coinName) =>
    fetch(`${REMOTE_API}/users/${coinName}`)
    .then(response => response.json())


export default {
  findCoinsForUser,
  findUsersForCoin,
  removeCoinFromUser,
  addCoinToUser
};