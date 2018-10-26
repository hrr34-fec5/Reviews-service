import React from 'react';
import Review from './Review.jsx';

const Reviews =({reviewsStore})=> (
  <div className = "reviews-list">
    <ul>
      {reviewsStore.map(review =>
        <Review
          key = {review._id}
          reviewEntry = {review}
        />)}
    </ul>
  </div>
);

export default Reviews;