import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from "redux-thunk";
import { requestPosts } from "./redux/blog/reducers";
import {authReducer} from './redux/auth/reducers'
import {requestComments} from './redux/comment/reducers'

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ requestPosts, authReducer, requestComments });
const store = createStore(
  rootReducer,
  composeEnhances(applyMiddleware(thunkMiddleware)
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
