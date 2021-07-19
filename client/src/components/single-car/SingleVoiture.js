import React, { useEffect, Fragment, useState } from "react";
import { getVoitureById, addComment } from "../../actions/voitureAction";
import { useSelector, useDispatch } from "react-redux";
import ListeReview from "./ListeReview";
import Loader from "../Loader";

export const SingleVoiture = ({ match }) => {
  const [comment, setComment] = useState("");
  const { loading, voiture } = useSelector(
    (state) => state.singleVoitureReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVoitureById(match.params.id));
  }, [match.params.id, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="single-voiture-containe">
        <div>
          <img
            src={voiture && voiture.images && voiture.images[0].url}
            alt="***"
            style={{ width: "400px" }}
          />
        </div>

        <button
          type="button"
          className="btn btn-info btn-lg "
          data-toggle="modal"
          data-target="#myModal"
        >
          Add Comment
        </button>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title"> Submit Review</h4>
              </div>
              <div className="modal-body">
                <textarea
                  name="review"
                  id="review"
                  className="form-control mt-3"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-default"
                  data-dismiss="modal"
                  onClick={() =>
                    dispatch(addComment(match.params.id, { comment }))
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {voiture &&
          voiture.reviews.map((review) => (
            <ListeReview key={review._id} review={review} />
          ))}
      </div>
    </Fragment>
  );
};
