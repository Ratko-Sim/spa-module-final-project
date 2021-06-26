import { SidebarType } from "../action-types/actionTypes"

export const ShowSidebar = () => {
  return {
    type: SidebarType.SHOW_SIDEBAR,
  };
};
export const HideSidebar = () => {
  return {
    type: SidebarType.HIDE_SIDEBAR,
  };
};