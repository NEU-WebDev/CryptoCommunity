import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import NavBar from "../navbar.js";
import postService from "../../services/post-service"

const ForumScreen = () => {

  useEffect(() => {
    findRecentPosts()
  }, [])

  const [recentPosts, setRecentPosts] = useState([])


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
            <h1>CryptoCommunity Forums</h1>
            <h4>Engage in Conversation and Learn More About Crypto</h4>
          </div>
          <NavBar/>
          <div className="recent-posts">
            <ul className="list-group">
              {
                recentPosts.map((post) => {
                  return(
                      <li className="list-group-item">
                        {post.title}
                        {post.body}
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

export default ForumScreen;