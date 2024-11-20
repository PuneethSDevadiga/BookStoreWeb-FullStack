import React from 'react'
import About from '../components/About'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const AboutS = () => {
  return (
    <div>
        <div className='bg-white text-black  dark:bg-black dark:text-white'>
        <NavBar/>
        <div className='min-h-screen '>
        <About/>
        </div>
        
        <Footer/>
    </div>
    </div>
  )
}

export default AboutS