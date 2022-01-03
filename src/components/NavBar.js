import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-links  blue darken-2">
        <NavLink to="/" className="links">
          Home
        </NavLink>
        <NavLink to="/portfolio" className="links">
          Portfolio
        </NavLink>
        <NavLink to="/about" className="links">
          About me
        </NavLink>
        <NavLink to="/projects" className="links">
          Projects
        </NavLink>
        <NavLink to="contact" className="links">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
