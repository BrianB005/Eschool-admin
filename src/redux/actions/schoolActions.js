import axios from "axios";
import {
  GET_ALL_SCHOOLS_FAIL,
  GET_ALL_SCHOOLS_REQUEST,
  GET_ALL_SCHOOLS_SUCCESS,
} from "../constants/schoolConstants";

export const getAllSchools = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_SCHOOLS_REQUEST });
  try {
    const token = getState()?.signInInfo?.userInfo?.token;
    const { data } = await axios.get(
      "https://edet-school.herokuapp.com/api/v1/schools/all",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: GET_ALL_SCHOOLS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_SCHOOLS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
