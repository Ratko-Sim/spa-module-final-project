import { SpinnerType } from "../action-types/actionTypes";

export const SpinnerReducer = (state = false, action) => {
  switch (action.type) {
    case SpinnerType.SHOW_SPINNER:
      return true;
    case SpinnerType.SHOW_PRODUCTS:
      return false;
    default:
      return state;
  }
}