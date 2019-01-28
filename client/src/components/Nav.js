import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/register">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Sign In</NavLink>
        </li>
        <li>
          <Link to="/login">
            <button onClick={props.handleLogout}>Log Out</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
