import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>ApexLabs Movie Database</h1>
      <div className="link-container">
        <Link className="navlink" to="/">Home</Link>
        <Link className="navlink" to="/popular">Popular movies</Link>
      </div>
    </div>
  );
}

export default Navbar;
