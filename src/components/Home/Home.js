import React from 'react'
import HeroSlider from "./HeroSlider/HeroSlider"
import DealsComponent from "./DealsComponent/DealsComponent"
import Reviews from './ReviewsComponent/Reviews';

function Home() {
  return (
    <div>
      <HeroSlider />
      <DealsComponent />
      <Reviews />
    </div>
  )
}

export default Home
