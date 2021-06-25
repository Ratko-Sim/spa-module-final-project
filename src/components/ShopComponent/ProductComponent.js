import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./ProductComponent.scss";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)
  const renderList = products.map((products) => {

    const { id, title, image, price, category, description } = products;
    return (

      <div className="Card-Container">
        <div to={`/product/${id}`} className="card" key={id} >

          <div className="card-image"><img src={image} alt={title} /></div>

          <div className="card-content">
            <div className="card-product-color">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="card-title"><h3>{title}</h3></div>
            <div className="card-price"><h2>{price} €</h2></div>
            <div className="card-category">{category}</div>
          </div>
          {/* <div className="card-description"> <p>{description}</p></div> */}
          <Link to={`/product/${id}`} className="card-link" ><span>Buy Now</span></Link>

        </div >
      </div>
    )
  })

  return (
    <>
      {renderList}
    </>
  )
}
