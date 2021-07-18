import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = ({ isAdmin, component: Component, ...rest }) => {
  const { auth, isLoading } = useSelector((state) => state.userReducer);

  return (
    <div>
      {!isLoading && (
        <Route
          {...rest}
          render={(props) => {
            if (!auth) {
              return <Redirect to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </div>
  );
};

export default PrivateRouter;
