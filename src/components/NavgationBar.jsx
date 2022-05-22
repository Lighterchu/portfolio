import React from 'react'
import { Link } from "react-router-dom";

function NavgationBar() {
  return (
    <nav className="nav-bar">
       <Link to="/about">About</Link>
       <Link to="/home">Home</Link>
       <Link to="/projects">Projects</Link>
    </nav>
  )
}

export default NavgationBar