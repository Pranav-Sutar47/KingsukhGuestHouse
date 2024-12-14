import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Rooms from './components/Rooms'
import Services from './components/Services'
import Gallary from './components/Gallary'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Webpage() {
  return (
    <>
        <Home/>
        <About/>
        <Rooms/>
        <Services/>
        <Gallary/>
        <Contact/>
        <Footer/>
    </>
  )
}
