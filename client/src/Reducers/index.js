import { combineReducers } from "redux";
import voitureReducer from "./voitureReducer";
import userReducer from "./userReducer";
import singleVoitureReducer from "./SingleVoitureREducer";

const reducer = combineReducers({
  voitureReducer,
  userReducer,
  singleVoitureReducer,
});

export default reducer;
