import {
  GET_ALL_VOITURE,
  GET_ALL_VOITURE_FAIL,
  GET_VOITURE_REQUEST,
} from "../actions/Type";

const initialState = {
  loading: true,
  voitures: [],
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_VOITURE_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_VOITURE:
      return { ...state, loading: false, voitures: payload };
    case GET_ALL_VOITURE_FAIL:
      return { ...state, loading: false, voitures: [] };
    default:
      return state;
  }
};

export default reducer;
