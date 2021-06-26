import { ReviewActionTypes } from "../action-types/ReviewActionTypes";

const initialState = {
  reviews: [],
};

export const ReviewReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ReviewActionTypes.SET_REVIEWS:
      return { ...state, reviews: payload};
    default:
      return state;
  }
};
