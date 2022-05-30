import React, { } from 'react';
import logo from "../images/logo.png";
import {NavContainer,NavLogo,NavItem,NavLinks,NavMenu,Nav}from './Navb';
import { useState } from 'react';
import { Fragment } from 'react';

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  }; 
  window.addEventListener('scroll', changeNavbarColor);
  return (
      <Fragment>
        <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
           <NavContainer>
            <img src='logo.svg'></img>
              <NavLogo href="#">Discover</NavLogo>
              <NavMenu>
                <NavItem>
                  <NavLinks href="#">Join</NavLinks>
                </NavItem>
                <h1>Soundwave</h1>
              </NavMenu>
           </NavContainer>
        </Nav>
      </Fragment>
    )
}
  
export default Navbar;