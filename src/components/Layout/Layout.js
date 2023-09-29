import './layout.scss';
import React from 'react';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Layout = () => {
  return (
    <>
        
        <Navbar/>
        <Header/>
        <Projects/>
        <Contact/>
    </>
  )
}

export default Layout