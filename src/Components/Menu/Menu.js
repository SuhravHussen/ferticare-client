import React from 'react';
import './Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div className="menu-container">
        <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home"><span className="logo" >Ferti<span className="pinkColor">care</span></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Link to='/home'> <Nav.Link className="ml-3 " href="#home">Home</Nav.Link></Link> 
          <Link to='/doctors'> <Nav.Link  className="ml-3"  href="#home">Fertility Doctors</Nav.Link></Link>
          <Link to='/services'> <Nav.Link  className="ml-3"  href="#home">Our Services</Nav.Link></Link>
          <Link to='/knowledge'> <Nav.Link  className="ml-3"  href="#home">Knowledge Center </Nav.Link></Link>
          <Link to='/contact'> <Nav.Link  className="ml-3"  href="#home">Contact US</Nav.Link></Link>
  
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
};

export default Menu;