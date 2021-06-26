import { SpinnerType } from "../action-types/actionTypes"

export const showSpinner = () => {
  return {
    type: SpinnerType.SHOW_SPINNER,
  };
};
export const showProducts = () => {
  return {
    type: SpinnerType.SHOW_PRODUCTS,
  };
};