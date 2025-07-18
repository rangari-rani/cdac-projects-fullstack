import React from 'react'
import HeroSection from '../components/HeroSection'
import Workflow from '../components/Workflow'
import Pricing from './../components/Pricing';

const FirstPage = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
   
    <HeroSection/>
    <Workflow/>
    <Pricing/>
   
   </div>
  )
}

export default FirstPage