import React from 'react'
import { Hero } from '../sections/Hero'
import { Stats } from '../sections/Stats'
import { About } from '../sections/About'
import { FeaturedWork } from '../sections/FeaturedWork'
import { Services } from '../sections/Services'
import { SocialProof } from '../sections/SocialProof'
import { Pricing } from '../sections/Pricing'
import { FAQ } from '../sections/FAQ'
import { Newsletter } from '../sections/Newsletter'

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
