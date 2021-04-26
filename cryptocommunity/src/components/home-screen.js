import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import "../index.css";
import "../styles/home-page.css";
import NavBar from "./navbar";
import postService from "../services/post-service";
import userService from "../services/user-service";

const HomeScreen = () => {

  const [recentPosts, setRecentPosts] = useState([])
  const [currentUser, setCurrentUser] = useState({username: '', password: ''})

  useEffect(() => {
    findRecentPosts()
  }, [])

  useEffect(() => {
    userService.profile()
    .then((currentUser) => {
      setCurrentUser(currentUser)
    })
  }, [])

  const findRecentPosts = () => {
    postService.findRecentPosts()
    .then((Results) => {
      setRecentPosts(Results);
    }, [])
  }

  return(
      <>
        <div class="container-fluid">
          <div class="cryptocommunity-header">
            <h1>CryptoCommunity</h1>
            <h4>Creating Community Around Crypto Currency</h4>
          </div>
          <NavBar/>
          <div class="default-banner">
            <img class="img-fluid" alt="Responsive image" src="https://mylightshine.com/wp-content/uploads/2021/04/innovative-systems-and-hi-tech-engineering-solutions-web-header.jpg"/>
          </div>
          <div className="recent-posts">
         <h6>Recent Posts & Articles</h6>
            <ul className="list-group">
            {
              recentPosts.map((post) => {
                return(
                    <li className="list-group-item-post">
                      <Link to={`/forum/post/${post.id}`} className="navbar-brand">{post.title}</Link>
                      By:
                      {post.author}
                    </li>
                )
              })
            }
            </ul>
          </div>
          <div className="footer">
            <a href="https://www.privacypolicies.com/live/a9ccc0fc-fdec-4404-a260-4f009950b239">Privacy Policy</a>
            <p>Vincent Luo & Richard A. Castaneda <br/>
              Northeastern University CS5610</p>
          </div>
        </div>
      </>
  )
}

export default HomeScreen;