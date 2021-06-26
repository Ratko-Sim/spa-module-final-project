import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProducts } from '../../Redux/actions/productActions';
import "./ProductDetails.scss";
import paypal from "./paypal.png"
import spin from "./Spinner-3.gif"

export const ProductDetails = () => {
  const product = useSelector((state) => state.product)
  const { image, title, price, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => {
        console.log('Err', err)
      })
    dispatch(selectedProducts(response.data))
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProducts());
    }
  }, [productId])
  return (
    <div>
      {
        Object.keys(product).length === 0 ? (
          <div className="Details-spinner"><img src={spin} alt="Loading spinner" /></div>
        ) : (
          <>
            <div className="Details-wrapper">
              <div className="Details-image">
                <img src={image} alt={title} />
              </div>
              <div className="Details-content-wrapper">
                <div className="Details-title">{title}</div>
                <div className="Details-price">{price} €</div>
                <div className="Details-description">{description}</div>
                <button className="Details-button">Add to Cart</button>
                <div className="Details-buyNow">
                  <div>Buy now with</div>
                  <img src={paypal} alt="paypal" />
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
