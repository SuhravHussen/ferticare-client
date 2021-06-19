import React from 'react';
import { NavLink } from 'react-router-dom';
import './WebMenu.scss'
const WebMenu = () => {
    return (
        <div className="web-menu">
            <h1>Ferti<span>care</span></h1>
             <div className="menu-items">
                 <ul>
                 <li> <NavLink activeClassName="active" className="navlink" to='/Home'>Home</NavLink></li>
                 <li><NavLink activeClassName="active" className="navlink" to='/doctors'>Fertility Doctors</NavLink></li>
                 <li>        <NavLink activeClassName="active" className="navlink"to='/services'>Our Service</NavLink></li>
                 <li> <NavLink activeClassName="active" className="navlink" to='/knowledge'>Knowledge Center </NavLink></li>
                 <li>          <NavLink  className="navlink" to='/contact'>Contact Us</NavLink></li>
                 </ul>
            </div>
        </div>
    );
};

export default WebMenu;