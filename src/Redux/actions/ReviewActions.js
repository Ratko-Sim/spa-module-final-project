import { ReviewActionTypes } from "../action-types/ReviewActionTypes";

export const setReviews = (reviews) => {
    return {
        type: ReviewActionTypes.SET_REVIEWS, 
        payload: reviews,
    };
};

