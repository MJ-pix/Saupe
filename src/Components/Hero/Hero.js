import React from 'react'
import "./Hero.css"
import LogoAnimaatio from "../../Assets/LogoAnimaatio.mp4"

const Hero = () => {
  return (
    <div className='hero-container'>
        <video width="100%" height="100%" loop muted autoPlay src={LogoAnimaatio} className='video'>
        </video>
    </div>
  )
}

export default Hero
