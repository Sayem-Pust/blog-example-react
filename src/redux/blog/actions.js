import {
  REQUEST_POST_PENDING,
  REQUEST_POST_SUCCESS,
  REQUEST_POST_FAILED,
} from "./constants";

export const requestPosts = () => (dispatch) => {
  dispatch({ type: REQUEST_POST_PENDING });
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_POST_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: REQUEST_POST_FAILED, payload: err }));
};

