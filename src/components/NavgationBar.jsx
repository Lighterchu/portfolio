import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,Container} from 'react-bootstrap'


function NavgationBar() {
  
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">My Portfoilo</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="About">About</Nav.Link>
        <Nav.Link href="/Resume">Resume</Nav.Link>
        <Nav.Link href="/Projects">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}

export default NavgationBar