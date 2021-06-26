import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./ProductComponent.scss";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)
  const renderList = products.map((products) => {

    const { id, title, image, price } = products;
    return (
      <div className="Card">
        <Link to={`/product/${id}`} key={id} >
          <div className="card-image"><img src={image} alt={title} /></div>
          <div className="card-title">{title}</div>
          <div>
            <div className="card-price">{price} €</div>
            <button>Add to cart</button>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <>
      {renderList}
    </>
  )
}
