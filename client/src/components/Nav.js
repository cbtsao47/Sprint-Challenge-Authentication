import React from "react";
import { NavLink } from "react-router-dom";

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
      </ul>
    </nav>
  );
};

export default Nav;
