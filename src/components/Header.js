import React from "react";
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
import {logout} from '../redux/auth/actions'
import { useDispatch } from "react-redux";

export default function Header(props) {
  const dispatch = useDispatch();
  const onRequestLogout = () => dispatch(logout());
  let username = localStorage.getItem("user");
  return (
    <header className="header">
      <h2 className="logo">Blog-Post</h2>
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </div>

          {username ? <p>Welcome To {username}</p> : null}

          <div>
            {props.isAuthenticated ? (
              <li>
                <Link to="/" onClick={onRequestLogout}>
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}
