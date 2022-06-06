import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'

function NavgationBar() {
  
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/home" as={<Home/>}>My Portfoilo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about" as={<About/>}>About</Nav.Link>
            <Nav.Link href="/resume" as={<Resume/>}>Resume</Nav.Link>
            <Nav.Link href="/project" as={<Projects/>}>Projects</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavgationBar