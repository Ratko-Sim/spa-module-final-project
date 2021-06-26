import React from 'react'
import "./Footer.scss"
import klarna from "./Klarna.png"
import paypal from "./paypal.png"
import master from "./master.png"
import visa from "./visa.png"
import sofort from "./sofort.png"
import gyropay from "./giropay.png"
import dpd from "./DPD.png"
import dhl from "./DHL.jpg"
import ups from "./UPS.png"
import hermes from "./hermes.jpg"

function Footer() {
  return (
    <div className="Footer">
      <div className="section-1">
        <span className="title-all">service</span>
        <span className="section-1-title-2">do you have questions?</span>
        <span className="section-1-title-3">040 - 1234 1234</span>
        <span className="section-1-title-4">Free callback service</span>
        <span className="section-1-title-5">service@arhera.com</span>
      </div>
      <div className="section-2">
        <span className="title-all">payment methods</span>
        <div className="logo-wrapper">
          <div className="logo-container">
            <img className="sofort" src={sofort} alt="" />
          </div>
          <div className="logo-container">
            <img className="gyropay" src={gyropay} alt="" />
          </div>
          <div className="logo-container">
            <img className="klarna" src={klarna} alt="" />
          </div>
          <div className="logo-container">
            <img className="paypal" src={paypal} alt="" />
          </div>
          <div className="logo-container">
            <img className="master" src={master} alt="" />
          </div>
          <div className="logo-container">
            <img className="visa" src={visa} alt="" />
          </div>
        </div>
      </div>
      <div className="section-3">
        <span className="title-all">about us</span>
      </div>
      <div className="section-4">
        <span className="title-all">our partners</span>
        <div className="delivery-wrapper">
          <div className="delivery-container">
            <img className="dhl" src={dhl} alt="" />
          </div>
          <div className="delivery-container">
            <img className="dpd" src={hermes} alt="" />
          </div>
          <div className="delivery-container">
            <img className="hermes" src={dpd} alt="" />
          </div>
          <div className="delivery-container">
            <img className="ups" src={ups} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
