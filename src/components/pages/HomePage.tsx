import React from 'react'
import { Hero } from '../components/sections/Hero'
import { Stats } from '../components/sections/Stats'
import { About } from '../components/sections/About'
import { FeaturedWork } from '../components/sections/FeaturedWork'
import { Services } from '../components/sections/Services'
import { SocialProof } from '../components/sections/SocialProof'
import { Pricing } from '../components/sections/Pricing'
import { FAQ } from '../components/sections/FAQ'
import { Newsletter } from '../components/sections/Newsletter'

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <FeaturedWork />
      <Services sectionNumber="3" />
      <SocialProof sectionNumber="4" />
      <Pricing sectionNumber="5" />
      <FAQ sectionNumber="6" />
      <Newsletter showNumber />
    </>
  )
}
