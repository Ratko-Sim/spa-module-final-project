import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ReviewCard from "../ReviewCard/ReviewCard";
import { setReviews } from "../../../../Redux/actions/ReviewActions";
import { motion } from "framer-motion";

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
    // eslint-disable-next-line
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <motion.div
      className="reviews-section"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="reviews-section__row">
        <ReviewCard />
      </div>
    </motion.div>
  );
};

export default ReviewsPage;
