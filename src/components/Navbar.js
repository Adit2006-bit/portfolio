import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", backgroundColor: "#222" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "yellow" : "white",
          marginRight: "20px",
          textDecoration: "none",
          fontWeight: "bold"
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        style={({ isActive }) => ({
          color: isActive ? "yellow" : "white",
          textDecoration: "none",
          fontWeight: "bold"
        })}
      >
        Projects
      </NavLink>
    </nav>
  );
}

export default Navbar;