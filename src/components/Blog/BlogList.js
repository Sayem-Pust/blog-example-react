import React from "react";
import Blog from './Blog'

export default function BlogList({ title, blog }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="posts-center">
        {blog.map((item) => {
          return <Blog key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
