import { combineReducers } from "redux"
import { ReviewReducer } from "./ReviewReducer"; 

const rootReducer = combineReducers({
  allReviews: ReviewReducer, 
}); 

export default rootReducer; 