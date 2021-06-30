import React from 'react'
import "./Cart.scss"
import { useHistory } from "react-router-dom";


function Checkout() {

  let history = useHistory()

  return (
    <div className="PageInDev">
      <h2>Sorry, something went wrong.</h2>
      <p>We're working on it and we'll get it fixed as soos as we can.</p>
      <button onClick={() => history.goBack()}>go back</button>
    </div>
  )
}

export default Checkout
