import React from "react";
import { Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/2.png";
import './style.css';
const Navbar1 = ()=>{
    return(
      <Navbar  expand="lg" style={{position:"fixed", zIndex:'10' }}>
      <Navbar.Brand href="#"><img src={logo} alt="valid"></img><p>resturant</p></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
navbarScroll
        >
          <Nav.Link herf="#"><Link className="nav-link nav-12" to="/">home</Link></Nav.Link>
          <Nav.Link herf="#"><Link className="nav-link nav-12" to="/slide">slide</Link></Nav.Link>
          <Nav.Link href="#"><Link className="nav-link nav-12" to="/footer">explore</Link></Nav.Link>
          <Nav.Link href="#"><Link className="nav-link nav-12" to="/slide">review</Link></Nav.Link>
          <Nav.Link href="#"><Link className="nav-link nav-12" to="/slide">faq</Link></Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    
    )
}
export default Navbar1;