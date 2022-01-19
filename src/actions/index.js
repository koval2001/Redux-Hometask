import axios from "axios";

export const fetchBegin = () => ({
  type: "FETCH_BEGIN"
});

export const fetchSuccess = (items) => ({
  type: "FETCH_SUCCESS",
  payload: { items }
});

export const fetchError = (error) => ({
  type: "FETCH_ERROR",
  payload: { error }
});

export const fetchData = (url) => {
  return (dispatch) => {
    dispatch(fetchBegin());
    axios
      .get(url)
      .then((response) => dispatch(fetchSuccess(response.data.results)))
      .catch((error) => dispatch(fetchError(error)));
  };
};

export const removeData = (name) => ({
  type: "REMOVE",
  name
});
