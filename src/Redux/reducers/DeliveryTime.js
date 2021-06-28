import { DeliveryTimeType } from "../action-types/actionTypes";

const INITIAL_STATE = [
  {
    Country: "Country",
    Delivery: "Delivery Time",
  },
  {
    Country: "Germany",
    Delivery: "2-4 days",
  },
  {
    Country: "Austria",
    Delivery: "2-5 days",
  },
  {
    Country: "Switzerland",
    Delivery: "3-6 days",
  },
  {
    Country: "Sweden",
    Delivery: "4-7 days",
  },
  {
    Country: "France",
    Delivery: "4-7 days",
  },
  {
    Country: "Netherlands",
    Delivery: "3-7 days",
  },
  {
    Country: "Slovenia",
    Delivery: "4-7 days",
  },
  {
    Country: "Latvia",
    Delivery: "4-10 days",
  },
  {
    Country: "Estonia",
    Delivery: "4-10 days",
  },
  {
    Country: "Cyprus",
    Delivery: "10-60 days",
  },
  {
    Country: "Croatia",
    Delivery: "4-7 days",
  },
  {
    Country: "Luxembourg",
    Delivery: "3-7 days",
  },
  {
    Country: "Slovakia",
    Delivery: "4-7 days",
  },
  {
    Country: "Belgium",
    Delivery: "3-7 days",
  },
  {
    Country: "Italy",
    Delivery: "4-7 days",
  },
  {
    Country: "Romania",
    Delivery: "4-8 days",
  },
  {
    Country: "Greece",
    Delivery: "7-14 days",
  },
  {
    Country: "Ireland",
    Delivery: "4-10 days",
  },
  {
    Country: "Lithuania",
    Delivery: "4-14 days",
  },
  {
    Country: "Poland",
    Delivery: "4-12 days",
  },
  {
    Country: "Portugal",
    Delivery: "4-7 days",
  },
  {
    Country: "Liechtenstein",
    Delivery: "5-10 days",
  },
  {
    Country: "Czech Republic",
    Delivery: "4-7 days",
  },
  {
    Country: "Spain",
    Delivery: "4-8 days",
  },
  {
    Country: "Bulgaria",
    Delivery: "4-10 days",
  },
  {
    Country: "Hungary",
    Delivery: "4-7 days",
  },
  {
    Country: "Denmark",
    Delivery: "4-8 days",
  },
]

export const DeliveryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DeliveryTimeType.SET_DELIVERY:
      return state;
    default:
      return state;
  }
}