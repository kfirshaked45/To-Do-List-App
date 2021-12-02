import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="mid">
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/unchecked"> Things left to do </Link>
        </li>
        <li>
          <Link to="/checked"> Completed</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
