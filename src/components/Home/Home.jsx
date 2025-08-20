import React, { useRef } from 'react'
import './Home.css'
import { FaAnglesDown } from "react-icons/fa6";
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
  const homeRef = useRef(null);      
  const sectionRef = useRef(null);   

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='container' ref={homeRef}>
        <div className="video-back">
          <video autoPlay loop muted playsInline>
            <source src="Background_video.mp4" />
          </video>
        </div>

        <div className="text">
          <h1>zomato</h1>
          <h1>India’s #1</h1>
          <h1>food delivery app</h1>
          <p>Experience fast & easy online ordering <br />
            on the Zomato
          </p>

          <div className="image">
            <a href="https://play.google.com/store/apps/dev?id=7812834815367511165">
              <img src="gp.png" alt="" />
            </a>
            <a href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896">
              <img src="ios.png" alt="" />
            </a>
          </div>
          <h4 onClick={scrollToSection}>
            Scroll Down <span><FaAnglesDown /></span>
          </h4>
        </div>
      </div>
      <div ref={sectionRef}>
        <HeroSection />
      </div>
    </>
  )
}

export default Home
