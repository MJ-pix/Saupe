import React from 'react'
import Banner from '../Components/Banner/Banner';
import Gallery from '../Components/Gallery/Gallery';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';

const HomePage = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Banner/>
        <Gallery/>
    </>
  )
}

export default HomePage
