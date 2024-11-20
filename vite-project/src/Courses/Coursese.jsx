import React from 'react'
import NavBar from '../components/NavBar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import list from '../../public/list.json'

const Coursese = () => {
  return (
    <div className='bg-white text-black  dark:bg-black dark:text-white'>
        <NavBar/>
        <div className='min-h-screen pt-36 pl-6 text-center'>
        <Course/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Coursese