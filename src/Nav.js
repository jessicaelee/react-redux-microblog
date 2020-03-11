import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Blogs</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/new">Add a new post</NavLink>
      </li>
    </ul>
  )
};

export default Nav;