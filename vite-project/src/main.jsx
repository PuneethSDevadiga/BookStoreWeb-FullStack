import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home/Home'
import Course from './components/Course'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Coursese from './Courses/Coursese.jsx'
import Signup from './components/Signup.jsx'
import Contact from './components/Contact.jsx'
import ContactUs from './Contact Us/ContactUs.jsx'
import AboutS from './About/AboutS.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Course" element={<Coursese/>}/>
        
        <Route path="/Contact" element={<ContactUs/>}/>
        <Route path="/About" element={<AboutS/>}/>
      </Routes>
      <div className=''>
      <App />
      </div>
  </BrowserRouter>
);
