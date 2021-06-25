import React from 'react'
import "./DealsComponent.scss"

function DealsComponent() {
  return (
    <div className="Deals-wrapper">
      <div className="Deals-card-left">
        <span className="Deals-label">hot deals</span>
        <span className="Deals-title">under</span>
        <span className="Deals-price">99€</span>
        <button className="Deals-button">shop now</button>
      </div>
      <div className="Deals-card-right">
        <span className="Deals-label">hot deals</span>
        <span className="Deals-title">under</span>
        <span className="Deals-price">99€</span>
        <button className="Deals-button">shop now</button>
      </div>
    </div>
  )
}

export default DealsComponent
