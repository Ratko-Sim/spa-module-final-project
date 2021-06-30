import { ReviewType } from "../action-types/actionTypes";

export const setReviews = (reviews) => {
    return {
        type: ReviewType.SET_REVIEWS, 
        payload: reviews,
    };
};

