import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProducts } from '../../Redux/actions/productActions';
import "./ProductDetails.scss";
import paypal from "./paypal.png"
import spin from "./Spinner-3.gif"
import { motion } from "framer-motion"
import { IoChevronBack } from "react-icons/io5"
import { useHistory } from "react-router-dom";


export const DiscountedProduct15 = () => {
  const product = useSelector((state) => state.product)
  const { image, title, price, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  let history = useHistory();
  const handleClick = () => {
    history.push("/discount15")
  }

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
            <motion.div
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }} className="Details-wrapper">
              <div onClick={handleClick} className="back-to-shop">
                <IoChevronBack />
                <span>back</span>
              </div>
              <div className="Details-image">
                <img src={image} alt={title} />
              </div>
              <div className="Details-content-wrapper">
                <div className="Details-title">{title}</div>
                <div className="Details-price-original">€ {price}</div>
                <div className="Details-price-discounted">€ {Math.floor(price - (0.15 * price)) + ".99"}</div>
                <div className="Details-description">{description}</div>
                <button className="Details-button">Add to Cart</button>
                <div className="Details-buyNow">
                  <div>Buy now with</div>
                  <img src={paypal} alt="paypal" />
                </div>
              </div>
            </motion.div>
          </>
        )
      }
    </div>
  )
}