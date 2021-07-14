import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts } from '../../Redux/actions/productActions'




export const Filter = ({ render }) => {

  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Search products by Category</h3>

      <select onChange={(e) => dispatch(filterProducts(products, e.target.value))}>

        <option value="ALL">ALL</option>
        <option value="men's clothing">"men's clothing"</option>
        <option value="women's clothing">"women's clothing"</option>
        <option value="jewelery">"jewelery"</option>
        <option value="electronics">"electronics"</option>
      </select>
    </div>
  )
}
