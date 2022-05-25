import React from 'react'
import HeroImage from '../../assets/HeroImage.png'
import { HeroContainer,HeroBg,ImgBg } from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
          <ImgBg  src={HeroImage}/>
      </HeroBg>
    </HeroContainer >
  )
}

export default HeroSection
