import React from 'react'
import {Link} from "react-router-dom";
import "../index.css";
import "../styles/home-page.css";

const HomeScreen = () => {
  return(
      <>
        <div class="container-fluid">
          <div class="cryptocommunity-header">
            <h1>CryptoCommunity</h1>
            <h4>Creating Community Around Crypto Currency</h4>
          </div>
          <div class="cryptocommunity-navbar-primary">
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
              <Link to="/" className="navbar-brand">Home</Link>
              <Link to="/search" className="navbar-brand">Search</Link>
              <Link to="/Sign-In" className="navbar-brand">Sign-In</Link>
              <Link to="/register" className="navbar-brand">Sign-Up</Link>
            </nav>
          </div>
          <div class="default-banner">
            <img class="img-fluid" alt="Responsive image" src="https://www.freewebheaders.com/wp-content/gallery/high-tech-designs/innovative-systems-and-hi-tech-engineering-solutions-web-header.jpg"/>
          </div>
          <div className="recent-posts">
          <span><h6>Recent Posts & Articles</h6>
            <p>Recent Post 1</p>
            <p>Recent Post 2</p>
            <p>Recent Post 3</p>
          </span>
          </div>
          <div className="footer">
            <Link to="/privacy">Privacy Policy</Link>
            <p>Vincent Luo & Richard A. Castaneda <br/>
              Northeastern University CS5610</p>
          </div>
        </div>
      </>
  )
}

export default HomeScreen;