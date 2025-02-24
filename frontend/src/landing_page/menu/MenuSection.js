import React from 'react'
import Menu from './Menu'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Stats from '../Stats'
import './menuSection.css'
import About from './About'

const MenuSection = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background Image */}
      <img 
        src={`${process.env.PUBLIC_URL}/media/images/serving2.webp`} 
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

      {/* Foreground Content */}
      <Menu />
      <Stats />
      <About/>
    </div>
  );
};


export default MenuSection