import React from 'react'
import Navbar from '../components/Navbar'
import MainSection from '../components/MainSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='w-full mt-17 md:mt-22'>
        <MainSection/>
        <AboutSection/>
        <ServicesSection/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
