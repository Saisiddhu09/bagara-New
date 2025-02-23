import React from 'react'
import About from './About'
import Stats from '../Stats'
import Review from './Review'
import Navbar from '../Navbar'
import Footer from '../Footer'

const AboutSection = () => {
  return (
   
   <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background Image */}
      <img 
        src="/media/images/about.webp" 
        alt="Background" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1  // Sends the image behind other content
        }}
      />

   
   <About/>
   <Stats/>
   <Review/>
   
   
  </div>
  )
}

export default AboutSection