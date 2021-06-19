import { AppBar } from '@material-ui/core';
import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import './Burgermenu.scss'
import HideOnScroll from './HideOnScroll';
const BurgerMenu = () => {

 function showSettings (event) {
        event.preventDefault();
      }
    return (
      <HideOnScroll>
              <AppBar position="fixed">
      <div className="burger-menu">
      <h1 className="ferti">Ferti<span className="care">care</span></h1>
        <Menu >
          <NavLink activeClassName="active" className="menu-item" to='/Home'>Home</NavLink>
          <NavLink activeClassName="active" className="menu-item" to='/doctors'>Fertility Doctors</NavLink>
          <NavLink activeClassName="active" className="menu-item"to='/services'>Our Service</NavLink>
          <NavLink activeClassName="active" className="menu-item" to='/knowledge'>Knowledge Center </NavLink>
          <NavLink  activeClassName="active"  className="menu-item" to='/contact'>Contact Us</NavLink>
 
      </Menu>
      </div>
      </AppBar>
      </HideOnScroll>
    );
};

export default BurgerMenu;