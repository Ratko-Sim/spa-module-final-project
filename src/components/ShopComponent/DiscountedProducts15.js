import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from '../../Redux/actions/productActions'
import "./ProductListing.scss";
import { motion } from "framer-motion"
import spin from "./Spinner-3.gif"
import "./ProductDetails.scss"
import { showSpinner, showProducts } from "../../Redux/actions/SpinnerAction"
import { useHistory } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5"
import { Link } from 'react-router-dom';

export const DiscountedProducts15 = () => {
  const products = useSelector((state) => state.allProducts.products)

  const spinnerLoading = useSelector((state) => state.spinner)
  const dispatch = useDispatch()

  let history = useHistory();
  const handleClick = () => {
    history.push("/home")
  }

  const fetchProducts = async () => {
    dispatch(showSpinner())
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch(err => {
        console.error(err);
      });
    dispatch(setProducts(response.data));
    dispatch(showProducts());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (

    <div> {
      spinnerLoading === true ? (
        <div className="Details-spinner"><img src={spin} alt="Loading spinner" /></div>
      ) : (
        <>
          <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="Products-Container">
            <div onClick={handleClick} className="back-to-home">
              <IoChevronBack />
              <span>back</span>
            </div>
            {products.map((products) => {

              const { id, title, image, price } = products;
              return (
                <div className="Card" key={id}>
                  <Link to={`/product15/${id}`}  >
                    <div className="card-image"><img src={image} alt={title} /></div>
                    <div className="card-title">{title}</div>
                    <div>
                      <div className="card-price-original">€ {price}</div>
                      <div className="card-price-discounted">€ {Math.floor(price - (0.15 * price)) + ".99"}</div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </motion.div>
        </>)}
    </div>
  )
}