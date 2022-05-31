import GlobalStyle from './components/GlobalStyle';
import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import { Fragment } from 'react';
import Footer from'./components/Footer';
import { Circle, Circle2, Circle3, } from './components/styled-components';
import Joinbutton from './components/Join button.js';
import { JoinSec } from './components';
import {Discovery} from'./components';



function App() {
  return (

  <div>
  <GlobalStyle/>
  <Navbar/>
  <Main/>
  <Circle className="Circle"/> 
  <Circle2 className='Circle2'/>
  <Circle3 className='Circle3'/>
  <Homepage/>
  <Fragment/>
  <styled-components/>
  <logo/>
  <images/>
 
  
 </div>
  )
  }
  
  export default App
                                    