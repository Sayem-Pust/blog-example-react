import {AUTH_START, AUTH_FAIL, AUTH_LOGOUT,AUTH_SUCCESS} from './constants'
import axios from 'axios'

export const authStart = () => {
    return {
        type: AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: AUTH_SUCCESS,
        token: token
    }
} 

export const authFail = error => {
    return {
        type: AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem("expirationDate");
    return {
        type: AUTH_LOGOUT
    }
}

const checkAuthTimeout = expirationTime => (dispatch) => {
    setTimeout(() => {
        dispatch(logout())
    }, expirationTime * 1000)
}

export const authLogin = (email, password) => (dispatch) => {
    console.log(email, password)
  dispatch(authStart());
  axios
    .post("http://127.0.0.1:8000/api/login/", {
      email: email,
      password: password,
    })
    .then((res) => {
        console.log('enter')
      const token = res.data.data.access;
      const username = res.data.data.user.username;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("user", username);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch((err) => {
      dispatch(authFail(err));
      console.log(err);
    });
};

export const authSignup = (username, email, password1, password2) => (dispatch) => {
    console.log(username,email,password1)
  dispatch(authStart());
  axios
    // .post("http://127.0.0.1:8000/rest-auth/registration/", {
    .post("http://127.0.0.1:8000/api/registration/", {
      username: username,
      email: email,
      password: password1,
    })
    .then((res) => {
      console.log("enter");
      const token = res.data.data.access;
      const username = res.data.data.user.username;
      console.log(username);
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("user", username);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch((err) => {
      dispatch(authFail(err));
      console.log(err);
    });
};

export const authCheckState = () => dispatch => {
    const token = localStorage.getItem('token')
    if(token === undefined) {
        dispatch(logout())
    } else {
        const expirationDate = new Date(localStorage.getItem("expirationDate"));
        if(expirationDate <= new Date()){
            dispatch(logout())
        } else {
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
        }
    }
}
