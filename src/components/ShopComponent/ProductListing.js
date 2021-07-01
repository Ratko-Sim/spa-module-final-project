import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { ProductComponent } from './ProductComponent'
import { setProducts } from '../../Redux/actions/productActions'
import "./ProductListing.scss";
import { motion } from "framer-motion"
import spin from "./Spinner-3.gif"
import "./ProductDetails.scss"
import { showSpinner, showProducts } from "../../Redux/actions/SpinnerAction"
import { useHistory } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5"

export const ProductListing = () => {
  const spinnerLoading = useSelector((state) => state.spinner)
  const dispatch = useDispatch()

  let history = useHistory();

  const fetchProducts = async () => {
    dispatch(showSpinner())
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch(err => {
        console.error(err);
      });
    // console.log(response.data.map((x) => x.category))
    dispatch(setProducts(response.data));
    dispatch(showProducts());
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
    window.scrollTo(0, 0);
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
            <div onClick={() => history.goBack()} className="back-to-home">
              <IoChevronBack />
              <span>back</span>
            </div>
            <ProductComponent />
          </motion.div>
        </>)}
    </div>
  )
}
