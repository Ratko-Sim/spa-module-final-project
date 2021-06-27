import { SidebarType } from "../action-types/actionTypes";


export const SidebarReducer = (state = false, action) => {
  switch (action.type) {
    case SidebarType.SHOW_SIDEBAR:
      return true;
    case SidebarType.HIDE_SIDEBAR:
      return false;
    default:
      return state;
  }
}