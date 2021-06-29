import { DeliveryTimeType } from "../action-types/actionTypes"

export const setDeliveryTime = () => {
  return {
    type: DeliveryTimeType.SET_DELIVERY,
  }
}