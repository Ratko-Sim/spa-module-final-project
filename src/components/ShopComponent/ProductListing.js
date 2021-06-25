import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { ProductComponent } from './ProductComponent'
import { setProducts } from '../../Redux/actions/productActions'
import "./ProductListing.scss";


export const ProductListing = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  // const  fetchProducts = () => {
  //   const response =  axios.get("https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US", {
  // 	"method": "GET",
  // 	"headers": {
  // 		"x-rapidapi-key": "c82b03e113mshc25547e263cf173p16f138jsn875ac347498b",
  // 		"x-rapidapi-host": "asos2.p.rapidapi.com"
  // 	}
  // })
  // .then(response => {
  // 	console.log(response.data.suggestionGroups[0]);
  // })
  // .catch(err => {
  // 	console.error(err);
  // });

  // dispatch(setProducts(response.data))
  // };



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
