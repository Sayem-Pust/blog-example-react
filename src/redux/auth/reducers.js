import {AUTH_LOGOUT, AUTH_FAIL, AUTH_SUCCESS, AUTH_START} from './constants'


const initialState = {
    token: null,
    error: null,
    loading: false,
}

export const authReducer = (state=initialState, action={}) => {
    switch(action.type){
        case AUTH_START:
            return Object.assign({}, state, {
                loading: true,
                error: null
            })

        case AUTH_SUCCESS:
            return Object.assign({}, state, {
                token: action.token,
                error: null,
                loading: false
            })

        case AUTH_FAIL:
            return Object.assign({}, state, {
                error: action.error,
                loading: false
            })

        case AUTH_LOGOUT:
            return Object.assign({}, state, {
                token: null
            })

        default:
            return state
    }
}
