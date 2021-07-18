import {
  GET_BYID_VOITURE,
  GET_BYID_VOITURE_FAIL,
  GET_VOITURE_BYID_REQUEST,
  ADD_COMMENT_SUCCES,
} from "../actions/Type";

const initialState = {
  loading: true,
  voiture: null,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_VOITURE_BYID_REQUEST:
      return { ...state, loading: true };
    case GET_BYID_VOITURE:
      return { ...state, loading: false, voiture: payload };
    case GET_BYID_VOITURE_FAIL:
      return { ...state, loading: false, voiture: null };
    case ADD_COMMENT_SUCCES:
      return { ...state, voiture: { ...state.voiture, reviews: payload } };

    default:
      return state;
  }
};

export default reducer;
