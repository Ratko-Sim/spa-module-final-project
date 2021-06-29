import React, { useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import ReviewCard from "./ReviewCard/ReviewCard";
import { setReviews } from "../../../Redux/actions/ReviewActions";
import "./Reviews.scss";

const Reviews = () => {
  const dispatch = useDispatch();
  const fetchReviews = async () => {
    const response = await axios
      .get(`https://randomuser.me/api/?nat=us,dk,fr,gb&results=5`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setReviews(response.data.results));
  };

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line
  }, []);

  return (

    <div className="reviews-section">
      <h1>Customer Reviews</h1>
      <div className="title-underline"></div>
      <div className="reviews-section__row">
        <ReviewCard />
      </div>
      <Link to="/reviews"><button>See more customer reviews</button></Link>
    </div>

  );
};

export default Reviews;