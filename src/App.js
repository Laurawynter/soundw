import GlobalStyle from './components/globalStyle.js';
import React from 'react';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import { Fragment } from 'react';
import Join  from './components/Join.js'
import Discovery from'./components/Discover.js';



function App() {
  return (

  <div>
  <GlobalStyle/>
  <Navbar/>
  <Main/>
  <Discovery/>
  <Join/>
  <Fragment/>
 
  
 </div>
  )
  }
  
  export default App
                                    