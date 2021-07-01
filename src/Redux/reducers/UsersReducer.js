import { UsersType } from "../action-types/actionTypes";

const INITIAL_STATE = [
  {
    name: "Arty",
    title: "Web Developer",
    img: "https://t1.pixers.pics/img-c676e9e9/posters-business-man-avatar-in-suit.jpg?H4sIAAAAAAAAA42QS26FMAxFtwNSwE6CIWEBb_qWgMiHV1o-UUJb1NU3tFVnlSoPfG3Zx7qG1y2Nkwfrt8NHWGfnFg_TvOQq9dGn-cMXyKjDss_dpUDMan_z0cY9FBVHzqqmYUSatbwt-_cxb65jfCmejiOkHiDJOsxnxuVkE9g1gUDeASogrbQj8o1VnR9ClY5xc2N0lWhOiXXYHgyv-D9WAUcg47hpjXLYGDUIgSdh9Uv4wkopGbV0oX9Mdoisu8wdcV6L7HbP00fxHB4l_HHzW0PegtsdJGUFpECLqzXc7jK_jZQWg9WEVnRGjZOZtECP1hqHRkvfCt6aOl_5BG8rJ1WKAQAA"
  },
  {
    name: "Heydar",
    title: "Web Developer",
    img: "https://www.pngarea.com/pngs/30/5680817_businessman-png-crossing-arms-silhouette-png-hd-png.png"
  },
  {
    name: "Ratko",
    title: "Web Developer",
    img: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2578170.jpg"
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