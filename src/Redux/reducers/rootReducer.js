import { combineReducers } from "redux"
import { ReviewReducer } from "./ReviewReducer";
import { productReducer, selectedProductReducer } from "./productReducer"
import { SpinnerReducer } from "./SpinnerReducer"

const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  allReviews: ReviewReducer,
  spinner: SpinnerReducer,

});
export default rootReducers;

