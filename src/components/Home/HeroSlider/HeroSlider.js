import 'react-slideshow-image/dist/styles.css'
import React from 'react'
import { Slide } from 'react-slideshow-image';
import "./HeroSlider.scss"


function HeroSlider() {
  return (

    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div className="slide-1">
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div className="slide-2">
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div className="slide-3">
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>

  )
}

export default HeroSlider
