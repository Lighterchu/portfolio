import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function NavgationBar() {
  
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/home.index.html">My Portfoilo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about.index.html">About</Nav.Link>
            <Nav.Link href="/resume.index.html">Resume</Nav.Link>
            <Nav.Link href="/projects.index.html">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavgationBar