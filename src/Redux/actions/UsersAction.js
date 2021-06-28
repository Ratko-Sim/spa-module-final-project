import { UsersType } from "../action-types/actionTypes"

export const setUsers = () => {
  return {
    type: UsersType.SET_USERS,
  }
}