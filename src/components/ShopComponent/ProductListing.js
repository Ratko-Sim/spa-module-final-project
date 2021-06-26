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

export const ProductListing = () => {
  const products = useSelector((state) => state.allProducts)
  const spinnerLoading = useSelector((state) => state.spinner)
  const dispatch = useDispatch()

  console.log("helllo", products);

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
            <ProductComponent />
          </motion.div>
        </>)}
    </div>
  )
}
