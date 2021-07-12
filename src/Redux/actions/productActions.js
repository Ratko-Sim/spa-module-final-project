import { ActionTypes } from "../action-types/actionTypes";
import { useSelector } from 'react-redux'

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};





export const filterProducts = (products, category) => {
  console.log("filter test")
  return {
    type: ActionTypes.FILTER_PRODUCT_BY_CATEGORY,
    payload: { products: category === 'ALL' ? products : products.filter(prod => prod.category === category), category: category }
  };
};






