import axios from "axios";

const apiBaseURL = "http://localhost:8000";

export let instance = axios.create({
  baseURL: apiBaseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.token,
  },
});

let lastToken = ""; // only used for diffing

// setAPIToken will be called when a new auth token is received from the server, or is loaded
// from localStorage

export function setAPIToken(token) {
  if (token !== lastToken) {
    lastToken = token;
    const headers = {
      "Content-Type": "application/json",
    };
    if (lastToken) {
      headers.Authorization = lastToken;
    }

    instance = axios.create({
      baseURL: apiBaseURL,
      timeout: 20000,
      headers,
    });
  }
}

// ki t7eb testa3ml axios importih mn instance men hné
