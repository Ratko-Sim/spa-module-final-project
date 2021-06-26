import { combineReducers } from "redux"
import { ReviewReducer } from "./ReviewReducer";
import { productReducer, selectedProductReducer } from "./productReducer"

const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  allReviews: ReviewReducer,
});
export default rootReducers;

