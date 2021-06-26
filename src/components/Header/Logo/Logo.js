import React from 'react'
import "./Logo.scss"
import arheraIcon from "./arhera-icon.png"
import shoppingCart from "./shopping-cart.png"
import searchIcon from "./search-icon.png"

function Logo() {

  return (
    <div className="Top-wrapper">
      <div className="Logo-wrapper">
        <a href="/">
          <img className="Logo-icon" src={arheraIcon} alt="" />
          <span className="Logo-name">arhera</span>
        </a>
      </div>
      <div className="Top-right-wrapper">
        <div className="Login">
          <span className="Login-item"><a href="/">wishlist</a></span>
          <span className="Login-item"><a href="/">my cart</a></span>
          <span className="Login-item"><a href="/">login</a></span>
        </div>
        <div className="Search-cart-wrapper">
          <div className="Search-bar">
            <input type="search" placeholder="Search..." />
            <button><img src={searchIcon} alt="search icon" /></button>
          </div>
          <div className="Shopping-icon-container">
            <img className="Shopping-icon" src={shoppingCart} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo
