import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduce from "../Reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reduce, compose(applyMiddleware(thunk), devTools));

export default store;
