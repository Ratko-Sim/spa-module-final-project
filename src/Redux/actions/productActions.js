import { ActionTypes } from "../action-types/actionTypes";
export const setProducts = (products) => {
  return {
    type: ActionTypes.set_products,
    payload: products,
  };
};


export const selectedProducts = (products) => {
  return {
    type: ActionTypes.selected_products,
    payload: products,
  };
};



export const removeSelectedProducts = (products) => {
  return {
    type: ActionTypes.remove_selected_product,
    payload: products,
  };
};



