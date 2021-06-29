import React, { useEffect, useState } from 'react';
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


export const ProductDetails = () => {


  const product = useSelector((state) => state.product);
  const { image, title, price, description } = product;
  const { productId } = useParams();
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();

  let history = useHistory();

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
    // eslint-disable-next-line
  }, [productId])

  const addToCartHandler = () => {
    history.push(`/cart/${productId}?qty=${qty}`)
  }
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
              <div onClick={() => history.goBack()} className="back-to-shop">
                <IoChevronBack />
                <span>back</span>
              </div>
              <div className="Details-image">
                <img src={image} alt={title} />
              </div>
              <div className="Details-content-wrapper">
                <div className="Details-title">{title}</div>
                <div className="Details-price">€ {price}</div>
                <div className="Details-description">{description}</div>
                <div className="Details-quantity">
                  <span>quantity</span>
                  <select value={qty} onChange={e => setQty(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                    {/* {
                        [...Array(product).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))
                      } */}
                  </select>
                </div>
                <button onClick={addToCartHandler} className="Details-button">Add to Cart</button>
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
