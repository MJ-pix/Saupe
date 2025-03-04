import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero-container'>
      <h1 className='hero-header'>
          Welcome to my portfolio
      </h1>
      <div className='hero-text-wrapper'>
        <h2 className='hero-text'>
          I am a Helsinki based visual designer. 
          I excel working with brands of all sizes, and I especially love creating visual identities, event graphics and social media.
          The guiding principles for all of my work is to create ethical and quality design that also manages to be in tune with contemporary trends.
        </h2>
      </div>
    </div>
  )
}

export default Hero
