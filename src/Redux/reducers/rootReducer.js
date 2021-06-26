import { combineReducers } from "redux"
import { ReviewReducer } from "./ReviewReducer";
import { productReducer, selectedProductReducer } from "./productReducer"
import { SpinnerReducer } from "./SpinnerReducer"
import { SidebarReducer } from "./SidebarReducer"

const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  allReviews: ReviewReducer,
  spinner: SpinnerReducer,
  sidebar: SidebarReducer,

});
export default rootReducers;

