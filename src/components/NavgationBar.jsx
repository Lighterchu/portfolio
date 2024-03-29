import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";

import {About} from '../pages/About'
import {Home} from '../pages/Home'
import {Resume} from '../pages/Resume'
import {Projects} from '../pages/Projects'
   
export const NavgationBar = () =>  {
  
  return (
  <Router>
  <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand  as={Link} to={"/portfolio"} >My Portfoilo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"portfolio/about"}>About</Nav.Link>
              {/* <Nav.Link as={Link} to={"portfolio/resume"}>Resume</Nav.Link> */}
              <Nav.Link as={Link} to={"portfolio/projects"}>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="portfolio/about" element={<About/>}></Route>
          <Route path="portfolio/resume" element={<Resume/>}></Route>
          <Route path="portfolio/projects" element={<Projects/>}></Route>
          <Route path="/portfolio" element={<Home/>}></Route>
        </Routes>
    </div>
  </div>
  </Router>
 
      
  )
}

