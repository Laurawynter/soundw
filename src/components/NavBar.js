import React, { } from 'react';
import logo from "../images/logo.png";
import {NavContainer,NavItem,NavLinks,NavMenu,H2}from './NavB';



const NavBar = () => {
  
  return (
      
        <NavMenu>
           <NavContainer>
           <section className='NBar'>
           <img src={logo} className="logo" alt="logo.png" />
           <H2 className="centerText">Soundwave</H2>
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