import React, { } from 'react';
import logo from "../images/logo.png";
import {NavContainer,NavItem,NavLinks,NavMenu,N}from './NavB';
import { useState } from 'react';


const NavBar = () => {
  
  return (
      
        <NavMenu /*className={colorChange ? 'navbar colorChange' : 'navbar'}*/>
           <NavContainer>
           <section className='NBar'>
           <img src={logo} className="logo" alt="logo.png" />
           <h2 className="centerText">Soundwave</h2>
           </section>
           <NavItem>
            <NavLinks href="#">Discover</NavLinks>
            <NavLinks href="#">Join</NavLinks>
            </NavItem>
          </NavContainer>
        </NavMenu>

    )
}
  
export default NavBar;