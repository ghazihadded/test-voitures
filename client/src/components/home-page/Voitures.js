import React from "react";
import { withRouter } from "react-router-dom";

const Voitures = ({ history, voiture, auth, user }) => {
  return (
    <div className="featured-product">
      <div className="featured-image">
        <img
          src={voiture && voiture.images && voiture.images[0].url}
          alt="product"
          style={{ width: "250px" }}
        />
      </div>

      <div className="name-price">
        <h3>{voiture.name}</h3>
        <p>$ {voiture.price}</p>

        {user ? (
          <button
            className="btn-comment"
            disabled={!auth}
            onClick={() => history.push(`voiture/${voiture._id}`)}
          >
            View Comment
          </button>
        ) : (
          <div className="alert-login">Login for View comments.</div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Voitures);
