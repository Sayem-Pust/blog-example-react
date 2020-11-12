import React from "react";
import { Link } from 'react-router-dom'
import image from '../../assets/book.jpg'

export default function Product({id, title, body}) {
  return (
    <article className="post">
      <div className="img-container">
        <img src={image} alt={title} />
        <Link to={`blog/${id}`} className="btn btn-primary post-link">
          Details
        </Link>
      </div>
      <div className="post-footer">
        <div className="post-title">{title}</div>
        <div className="post-body">{body}</div>
      </div>
    </article>
  );
}
