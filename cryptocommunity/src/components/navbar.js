import {Link} from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
      <div className="cryptocommunity-navbar-primary">
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">Home</Link>
          <Link to="/search" className="navbar-brand">Search</Link>
          <Link to="/details" className="navbar-brand">Details</Link>
          <Link to="/profile" className="navbar-brand">Profile</Link>
          <Link to="/login" className="navbar-brand">Login</Link>
          <Link to="/register" className="navbar-brand">Register</Link>
          <Link to="/privacy" className="navbar-brand">Privacy Policy</Link>
        </nav>
      </div>
  )
}

export default NavBar;