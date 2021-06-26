export const SpinnerReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_SPINNER":
      return true;
    case "SHOW_PRODUCTS":
      return false;
    default:
      return state;
  }
}