import React, { } from 'react';
import logo from "../assets/logo.png";
import {NavContainer,NavItems,H2}from './NavB';
import { Link } from 'react-router-dom';



const NavBar = () => {
  
  return (
      
      
           <NavContainer>
           <section className='NBar'>
          <Link to='/'> <img src={logo} className="logo" alt="logo.png" /></Link>
           <H2 className="centerText">Soundwave</H2>
           </section>
           <NavItems>
            <Link to='Discover' className='link'><h3>Discover</h3></Link>
            <Link to='Join' className='link'><h3>Join</h3></Link>
            </NavItems>
          </NavContainer>
        

    )
}
  
export default NavBar;