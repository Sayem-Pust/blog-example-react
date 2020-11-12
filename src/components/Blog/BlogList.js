import React, {useState} from "react";
import Blog from './Blog'
import Pagination from '../Pagination'

export default function BlogList({ title, blog }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(4);

    const handlePaginate = (paginate) => {
      setCurrentPage(paginate);
    };

    // pagination
    let indexOfLastPost = currentPage * postPerPage;

    let indexOfFirstPost = indexOfLastPost - postPerPage;
    let currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div>
      <section className="section">
        <h2 className="section-title">{title}</h2>
        <div className="posts-center">
          {currentPosts.map((item) => {
            return <Blog key={item.id} {...item} />;
          })}
        </div>
      </section>
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={blog.length}
        paginate={handlePaginate}
        currentPage={currentPage}
      />
    </div>
  );
}
