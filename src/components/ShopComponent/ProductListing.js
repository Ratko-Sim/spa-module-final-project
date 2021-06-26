import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { ProductComponent } from './ProductComponent'
import { setProducts } from '../../Redux/actions/productActions'
import "./ProductListing.scss";

export const ProductListing = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch(err => {
        console.error(err);
      });

    console.log(response)
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ", products)
  return (
    <div className="Products-Container">
      <ProductComponent />
    </div>
  )
}
