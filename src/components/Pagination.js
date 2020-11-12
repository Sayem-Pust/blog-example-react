import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumber = [];

  console.log(currentPage);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination-buttons">
        {pageNumber.map((number, index) => {
          return (
            <li key={number} className="page-link">
              <button
                onClick={() => paginate(number)}
                // href="!#"
                className={
                  number === currentPage
                    ? "page-btn page-btn-current"
                    : "page-btn"
                }
                // className="page-btn"
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination
