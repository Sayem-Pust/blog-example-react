import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Login from './pages/Login'
import Blog from './pages/Blog'
import BlogDetails from "./pages/BlogDetails";
import Header from './components/Header'
import {connect} from 'react-redux'
import { authCheckState } from "./redux/auth/actions";


function App(props) {
  useEffect(() => {
    props.onTryAutoSignup()
  }, [])
  return (
    <Router>
      <Header {...props} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
