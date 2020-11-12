import {REQUEST_COMMENT_PENDING, REQUEST_COMMENT_SUCCESS, REQUEST_COMMENT_FAILED} from './constants'

const initialComments = {
    isPending: false,
    comments: [],
    error: ''
}

export const requestComments = (state=initialComments, action={}) => {
    switch(action.type){
        case REQUEST_COMMENT_PENDING:
            return Object.assign({}, state, {isPending: true});

        case REQUEST_COMMENT_SUCCESS:
            return Object.assign({}, state, {comments: action.payload, isPending: false});

        case REQUEST_COMMENT_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: true});

        default:
            return state
    }
}

