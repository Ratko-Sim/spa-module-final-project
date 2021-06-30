import React from "react";
import "./TrendingProductComponent.scss";
import { Link } from 'react-router-dom';

export const TrendingProductComponent = (props) => {
  return (
    <Link to={`/product/${props.id}`}  >
    <div className="trending-card">
      <div className="trending-card-image"><img src={props.image} alt={props.title} /></div>
      <div className="trending-card-category">{props.category}</div>
      <div className="trending-card-title">{props.title}</div>
      <div className="trending-card-price">€ {props.price}</div>
    </div>
    </Link>
  );
};
