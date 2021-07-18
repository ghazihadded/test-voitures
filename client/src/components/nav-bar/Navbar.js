import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../actions/userAction";

const Navbar = () => {
  const { user, isLoading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  if (isLoading) {
    return null;
  }

  return (
    <nav>
      <div>
        <div className="navbar-brand">
          <Link to="/">
            <i className="fas fa-car"></i>
          </Link>
        </div>
      </div>

      <div className="">
        {user !== null ? (
          <Link
            to="/login"
            className="btn-nav "
            id="login_btn"
            onClick={() => dispatch(logOut())}
          >
            LogOut
          </Link>
        ) : (
          <Link to="/login" className="btn-nav " id="login_btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
