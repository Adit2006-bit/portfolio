import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Naredla Adit Reddy</div>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;