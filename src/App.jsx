import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Eduaction'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      
      <div className='bg-[#0A192F] w-full min-h-screen text-white'>
        
        <Navbar />
        <Hero />
        <About />
        <Skills/>
        <Education/>
        <Projects/>
        <Certificates/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App

