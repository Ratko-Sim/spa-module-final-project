import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts } from '../../Redux/actions/productActions'
import axios from 'axios'


export const Filter = () => {
  const products = useSelector((state) => state.items)
  const category = useSelector((state) => state.category)
  const filteredproducts = useSelector((state) => state.allProducts.filteredItems)
  const dispatch = useDispatch()
  const showProductsByCategory = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch(err => {
        console.error(err);
      });
    dispatch(filterProducts(response.data, response.data.map(x => x.category)))
    console.log(response.data.map(x => x.category))
  };

  useEffect(() => {
    dispatch(showProductsByCategory)
  }, []);

  const filterProducts = (event) => {
    if (event.target.value === "") {
      category = event.target.value;
      products = products;
    } else {
      category = event.target.value;
      products = products.filter(product => product.category)
    }
  }


  return (
    <div>
      <h3>Search products by Category</h3>
      {/* <select value={category} onChange={(e) => filterProducts(products, e.target.value)}> */}
      <select value={category} onChange={filterProducts}>
        <option value="ALL">ALL</option>
        <option value="men's clothing">"men's clothing"</option>
        <option value="women's clothing">"women's clothing"</option>
        <option value="jewelery">"jewelery"</option>
        <option value="electronics">"electronics"</option>
      </select>
    </div>
  )
}
