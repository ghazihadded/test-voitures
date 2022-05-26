import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import HomePage from "./components/home-page/HomePage";
import Navbar from "./components/nav-bar/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import setToken from "./header/SetToken";
import { getUser } from "./actions/userAction";
import { SingleVoiture } from "./components/single-car/SingleVoiture";
import PrivateRouter from "./components/PrivateRouter";
import "./App.css";
import { setAPIToken } from "./axios";
import { TestHistory } from "./components/TestHistory";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={TestHistory} />

          <PrivateRouter exact path="/voiture/:id" component={SingleVoiture} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
