import React, { Fragment, useEffect } from "react";
import Voitures from "./Voitures";
import { useSelector, useDispatch } from "react-redux";
import { getAllVoitures } from "../../actions/voitureAction";
import Loader from "../Loader";

const HomePage = () => {
  const { loading, voitures } = useSelector((state) => state.voitureReducer);
  const { isLoading, user, auth } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVoitures());
  }, [dispatch]);

  if (loading && isLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="product-list-containe">
        <h1 id="product-list-title">Liste de voitures</h1>
        <div className="product-list">
          {voitures.map((voiture) => (
            <Voitures key={voiture._id} voiture={voiture} {...{ user, auth }} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
