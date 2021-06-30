import React from 'react';
import "./Cart.scss"
import { useHistory } from "react-router-dom";

export default function MessageBox() {
  let history = useHistory()
  const backToShop = () => {
    history.push(`/ProductListing`)
  }
  return (
    <div className="MessageBox">
      <h3>Your shopping cart is empty.</h3>
      <button onClick={backToShop}>Back to shop</button>
    </div>
  );
}
