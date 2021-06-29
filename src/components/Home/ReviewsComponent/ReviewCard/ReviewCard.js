import React from "react";
import { useSelector } from "react-redux";
import "./ReviewCard.scss";

const ReviewCard = () => {
  const reviews = useSelector((state) => state.allReviews.reviews);

  const renderList = reviews.map((review) => {
    return (
      <div key={review.id.value} className="reviews-section__col">
        <div className="review-card">
          <div className="review-card-flex-container">
          <div className="review-card-img-box">
            <img src={review.picture.large} alt="Customers-image" />
          </div>
          <div className="review-card-user">
            <div className="name">{`${review.name.first} ${review.name.last}`}</div>
            <div className="location">{review.location.country}</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            </div>
          </div>
          <div className="review-card-underline"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ReviewCard;
