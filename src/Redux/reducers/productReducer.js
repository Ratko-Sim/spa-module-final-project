import { ActionTypes } from "../action-types/actionTypes";

const initialState = {
  products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case ActionTypes.set_products:

      return { ...state, products: payload };

    default:
      return state;
  }

}



export const selectedProductReducer = (state = {}, { type, payload }) => {

  switch (type) {
    case ActionTypes.selected_products:

      return { ...state, ...payload };

    case ActionTypes.remove_selected_products:
      return {}
    default:
      return state;
  }

}


