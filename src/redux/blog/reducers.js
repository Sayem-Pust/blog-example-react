import {REQUEST_POST_SUCCESS, REQUEST_POST_PENDING, REQUEST_POST_FAILED} from './constants'


const initialStatePosts = {
    isPending: false,
    posts: [],
    error: ''
}

export const requestPosts = (state = initialStatePosts, action = {}) => {
  switch (action.type) {
    case REQUEST_POST_PENDING:
      return Object.assign({}, state, { isPending: true });

    case REQUEST_POST_SUCCESS:
      return Object.assign({}, state, {
        posts: action.payload,
        isPending: false,
      });

    case REQUEST_POST_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: true,
      });

    default:
      return state;
  }
};

