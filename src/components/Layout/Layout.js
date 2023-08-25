import './layout.scss';
import React from 'react';
import Header from '../Header/Header'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'

const Layout = () => {
  return (
    <>
    <Header/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default Layout