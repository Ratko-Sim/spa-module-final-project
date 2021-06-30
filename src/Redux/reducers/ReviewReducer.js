import { ReviewType } from "../action-types/actionTypes";

const initialState = {
  reviews: [],
};

export const ReviewReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ReviewType.SET_REVIEWS:
      return { ...state, reviews: payload};
    default:
      return state;
  }
};
