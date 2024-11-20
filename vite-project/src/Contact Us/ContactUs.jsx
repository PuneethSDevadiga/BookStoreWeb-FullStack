import React from 'react'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <div>
        <div className='bg-white text-black  dark:bg-black dark:text-white'>
        <NavBar/>
        <div className='min-h-screen '>
        <Contact/>
        </div>
        
        <Footer/>
    </div>
    </div>
  )
}

export default ContactUs