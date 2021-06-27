import React from 'react'
import "./DealsComponent.scss"
import { useHistory } from "react-router-dom";


function DealsComponent() {

  let history = useHistory();

  const handleClick = () => {
    history.push("/discount15")
  }

  return (
    <div className="Deals-wrapper">
      <div className="Deals-card-left">
        <span className="Deals-label">hot deals</span>
        <span className="Deals-title">under</span>
        <span className="Deals-price">99€</span>
        <button onClick={handleClick} className="Deals-button">shop now</button>
      </div>
      <div className="Deals-card-right">
        <span className="Deals-label">hot deals</span>
        <span className="Deals-title">extra</span>
        <span className="Deals-price">15% OFF</span>
        <button onClick={handleClick} className="Deals-button">shop now</button>
      </div>
    </div>
  )
}

export default DealsComponent
