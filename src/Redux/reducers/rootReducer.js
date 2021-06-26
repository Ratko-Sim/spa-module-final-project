import { combineReducers } from "redux"
import { productReducer, selectedProductReducer } from "./productReducer"



const rootReducer = combineReducers({
  //randomName: reducerName
  allProducts: productReducer,
  product: selectedProductReducer,
})

export default rootReducer