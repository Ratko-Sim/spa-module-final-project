import { UsersType } from "../action-types/actionTypes";

const INITIAL_STATE = [
  {
    name: "Ratko",
    title: "Web Developer",
    img: ""
  },
  {
    name: "Arty",
    title: "Web Developer",
    img: ""
  },
  {
    name: "Heydar",
    title: "Web Developer",
    img: ""
  },

]

export const UsersrReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersType.SET_USERS:
      return state;
    default:
      return state;
  }
}