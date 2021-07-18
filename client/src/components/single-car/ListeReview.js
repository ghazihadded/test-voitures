import React from "react";

const ListeReview = ({ review }) => {
  return (
    <div className="liste-review">
      <ul>
        <li>
          <p className="review_user">by {review.name}</p>
          <p className="review_comment">{review.comment}</p>
        </li>
      </ul>
    </div>
  );
};

export default ListeReview;
