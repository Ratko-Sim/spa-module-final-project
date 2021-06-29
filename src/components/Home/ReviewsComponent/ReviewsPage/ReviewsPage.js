import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import ReviewCard from "../ReviewCard/ReviewCard";
import { setReviews } from "../../../../Redux/actions/ReviewActions";


const ReviewsPage = () => {
  const dispatch = useDispatch();

  const fetchReviews = async () => {
    const response = await axios
      .get("https://randomuser.me/api/?nat=us,dk,fr,gb&results=20")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setReviews(response.data.results));
  };

  useEffect(() => {
    fetchReviews();
  }, []);
  

  return (
    
      <div className="reviews-section">
        <div className="reviews-section__row">
          <ReviewCard />
        </div>
      </div>
    
  );
};

export default ReviewsPage;