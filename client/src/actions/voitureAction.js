import {
  GET_ALL_VOITURE,
  GET_ALL_VOITURE_FAIL,
  GET_VOITURE_REQUEST,
  GET_BYID_VOITURE,
  GET_BYID_VOITURE_FAIL,
  GET_VOITURE_BYID_REQUEST,
  ADD_COMMENT_FAIL,
  ADD_COMMENT_SUCCES,
} from "./Type";
import axios from "axios";

export const getAllVoitures = () => async (dispatch) => {
  dispatch({
    type: GET_VOITURE_REQUEST,
  });

  try {
    const { data } = await axios.get("http://localhost:8000/api/voiture/all");
    dispatch({
      type: GET_ALL_VOITURE,
      payload: data.voitures,
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: GET_ALL_VOITURE_FAIL,
    });
  }
};

export const getVoitureById = (id) => async (dispatch) => {
  dispatch({
    type: GET_VOITURE_BYID_REQUEST,
  });

  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/voiture/get/${id}`
    );
    dispatch({
      type: GET_BYID_VOITURE,
      payload: data.voiture,
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: GET_BYID_VOITURE_FAIL,
    });
  }
};

export const addComment = (id, comment) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `http://localhost:8000/api/voiture/comment/${id}`,
      comment
    );
    dispatch({
      type: ADD_COMMENT_SUCCES,
      payload: data.reviews,
    });
  } catch (err) {
    console.log(err.response.data);

    dispatch({
      type: ADD_COMMENT_FAIL,
    });
  }
};
