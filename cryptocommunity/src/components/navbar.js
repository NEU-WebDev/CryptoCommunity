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
          <a href="https://www.privacypolicies.com/live/a9ccc0fc-fdec-4404-a260-4f009950b239" className="navbar-brand">Privacy Policy</a>
        </nav>
      </div>
  )
}

export default NavBar;