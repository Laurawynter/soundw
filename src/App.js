import React from 'react';
import GlobalStyle from './components/globalStyle.js';
import Navbar from './components/NavBar.js';
import Footer from './components/Footer.js';
import './App.css'
import { BrowserRouter,Link } from 'react-router-dom';
import Router from './Router/Router';


   
    export default function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle/>
  
      <Navbar/>  
      <Router/>
      <Footer/>
    
    </BrowserRouter>
    </>
  );
}

