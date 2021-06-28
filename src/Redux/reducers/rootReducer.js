import { combineReducers } from "redux"
import { ReviewReducer } from "./ReviewReducer";
import { productReducer, selectedProductReducer } from "./productReducer"
import { SpinnerReducer } from "./SpinnerReducer"
import { SidebarReducer } from "./SidebarReducer"
import { UsersrReducer } from "./UsersReducer";
import { DeliveryReducer } from "./DeliveryTime"

const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  allReviews: ReviewReducer,
  spinner: SpinnerReducer,
  sidebar: SidebarReducer,
  users: UsersrReducer,
  delivery: DeliveryReducer,
});
export default rootReducers;

