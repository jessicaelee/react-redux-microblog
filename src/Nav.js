import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <NavLink exact to="/">Blogs</NavLink>
      <NavLink exact to="/new">Add a new post</NavLink>
    </div>
  )
};

export default Nav;