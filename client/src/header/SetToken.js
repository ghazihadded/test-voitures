import axios from "axios";

const setToken = (token) => {
  if (token) {
    return (axios.defaults.headers.common["auth-token"] = token);
  } else {
    delete axios.defaults.headers.common["auth-token"];
  }
};

export default setToken;
