import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userRegister } from "../../actions/userAction";

const Register = ({ history }) => {
  const { auth, registerError } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [alert, setAlert] = useState({
    name: "",
    email: "",
    passsword: "",
  });
  const [form, setForm] = useState({
    name: "test error",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth) {
      history.push("/");
    }
    if (registerError.length > 0) {
      registerError.forEach((err) => {
        if (err.params === "name") {
          setAlert({ ...alert, name: err.msg });
        } else if (err.params === "email") {
          setAlert({ ...alert, email: err.msg });
        } else if (err.msg === "email has already exist") {
          setAlert({ ...alert, email: err.msg, password: "" });
        } else {
          setAlert({ ...alert, password: err.msg });
        }
      });
    }
  }, [auth, registerError, alert, history]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userRegister(form));
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h3>sign up</h3>
        <div className="input-status">
          <input
            name="name"
            type="name"
            placeholder="name"
            required
            onChange={onChange}
          />

          <div className="status"></div>
        </div>
        {alert.name && <div className="text-alert">{alert.name}</div>}
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
        {alert.email && <div className="text-alert">{alert.email}</div>}
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
        {alert.password && <div className="text-alert">{alert.password}</div>}

        <button>Sign In</button>
        <p className="text-sign" onClick={() => history.push("/login")}>
          Sign-In
        </p>
      </form>
    </div>
  );
};

export default withRouter(Register);
