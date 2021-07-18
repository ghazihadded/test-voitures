import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../actions/userAction";

const Login = ({ history }) => {
  const { auth, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [alert, setAlert] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth) {
      history.push("/");
    }
    if (error) {
      setAlert("Invalid Credentials");
    }
  }, [auth, error, history]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(form));
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h3>sign In</h3>

        <div className="input-status">
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            onChange={onChange}
          />
          <div className="status"></div>
        </div>
        <div className="input-status">
          <input
            name="password"
            type="password"
            placeholder="password"
            required
            onChange={onChange}
          />
          <div className="status"></div>
        </div>

        <button>Sign In</button>
        {alert && <p className="text-alert">{alert}</p>}
        <p className="text-sign" onClick={() => history.push("/register")}>
          Sign-Up
        </p>
      </form>
    </div>
  );
};

export default withRouter(Login);
