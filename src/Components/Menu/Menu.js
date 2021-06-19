import React from 'react';
import BurgerMenu from './BurgerMenu';
import WebMenu from './WebMenu';
import './Menu.scss'
const Menu = () => {
    return (
        <>
         
          <WebMenu/>
          <BurgerMenu/>
        </>
    );
};

export default Menu;