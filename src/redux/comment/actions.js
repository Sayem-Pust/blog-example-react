import {REQUEST_COMMENT_FAILED, REQUEST_COMMENT_PENDING, REQUEST_COMMENT_SUCCESS} from './constants'


export const requestComments = (id) => dispatch => {
    dispatch({type: REQUEST_COMMENT_PENDING});
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: REQUEST_COMMENT_SUCCESS, payload: data })
      )
      .catch((err) => dispatch({ type: REQUEST_COMMENT_FAILED, payload: err }));
}

