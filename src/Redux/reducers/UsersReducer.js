import { UsersType } from "../action-types/actionTypes";

const INITIAL_STATE = [
  {
    name: "Ratko",
    title: "Web Developer",
    img: "https://o.remove.bg/downloads/be7e2d53-800e-40f2-ba27-c0a80d716cf2/85F6928C-4B00-4C26-89D7-79973C4C649D_1_105_c-removebg-preview.png"
  },
  {
    name: "Arty",
    title: "Web Developer",
    img: "https://media-exp3.licdn.com/dms/image/C5603AQHN1oXTZRUVpw/profile-displayphoto-shrink_200_200/0/1523568643864?e=1629331200&v=beta&t=vqoGexW9WlBHPJnM-8DlleOWd4k4j62R29HkFPkKP2s"
  },
  {
    name: "Heydar",
    title: "Web Developer",
    img: "https://avatars.githubusercontent.com/u/74183698?v=4"
  },

]

export const UsersrReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersType.SET_USERS:
      return true;
    default:
      return state;
  }
}