import React, { } from 'react';
import logo from "../images/logo.png";
import {NavContainer,NavItem,NavLinks,NavMenu,Nav}from './NavB';
import { useState } from 'react';


const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavBarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  }; 
  window.addEventListener('scroll', changeNavBarColor);
  return (
      
        <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
           <NavContainer>
           <img src={logo} className="logo" alt="logo.png" />
           <h2 className="centerText">Soundwave</h2>
            <NavLinks href="#">Discover</NavLinks>
               <NavMenu>
                <NavItem>
                <NavLinks href="#">Join</NavLinks>
                </NavItem>
              </NavMenu>
           </NavContainer>
        </Nav>

    )
}
  
export default NavBar;