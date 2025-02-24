import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Menu from './Menu'
import Feedback from './Feedback'
import Footer from '../Footer'
import Stats from '../Stats'
import './home.css'

const HomePage = () => {
  return (
    <div>
        
        <Hero/>
        
    
        <Menu/>
        <Feedback/>
        
        
        <Stats/>
        

    </div>
  )
}

export default HomePage