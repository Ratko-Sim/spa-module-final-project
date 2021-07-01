import React from 'react'
import { Link } from "react-router-dom";
import "./Logo.scss"
import arheraIcon from "./logo-arhera.jpg"
import searchIcon from "./search-icon.png"
import { useSelector } from 'react-redux';
import { RiShoppingBag3Line } from "react-icons/ri"

function Logo() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart

  return (
    <div className="Top-wrapper">
      <div className="Logo-wrapper">
        <a href="/">
          <img className="Logo-icon" src={arheraIcon} alt="" />
          <span className="Logo-name">arhera</span>
        </a>
      </div>
      <div className="Top-right-wrapper">
        
        <div className="Search-cart-wrapper">
          <div className="Search-bar">
            <input type="search" placeholder="Search..." />
            <button><img src={searchIcon} alt="search icon" /></button>
          </div>

          <Link to="/cart" className="Shopping-icon-container">
            <RiShoppingBag3Line className="Shopping-icon" />
            <div className="Shopping-counter">{cartItems.length > 0 && (<span className="Shopping-counter-badge">{cartItems.length}</span>)}</div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Logo
