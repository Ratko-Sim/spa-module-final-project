import React from "react";
import "./TrendingProductComponent.scss";

export const TrendingProductComponent = (props) => {
  return (
    <div className="trending-card">
      <div className="trending-card-image"><img src={props.image} alt={props.title} /></div>
      <div className="trending-card-title">{props.title}</div>
      <div className="trending-card-price">€ {props.price}</div>
    </div>
  );
};
